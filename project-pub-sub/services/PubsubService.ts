// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleUnaryCall, handleServerStreamingCall, handleBidiStreamingCall, sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream, status, UntypedHandleCall } from '@grpc/grpc-js';
import { ServiceError } from './utils/error';
import { PubsubServiceServer, PubsubServiceService } from './generated/PubsubService';
import { Event, PublishRequest, PublishResponse, SubscribeRequest, SubscribeResponse } from './generated/pubsub';
import EventEmitter from 'events';

// Implementing generic types for utulize EventEmitter in PubsubService class
interface Api<T> {
	[method: string]: T;
}

type ApiType<T> = Api<T> & {
		event_emitter : EventEmitter
}

class PubsubService implements PubsubServiceServer, ApiType<UntypedHandleCall> {
	[method: string]: any;

	event_emitter: EventEmitter;

	constructor() {
		// Constructing one simple event emitter to service.
		this.event_emitter = new EventEmitter()
	}

	public publish: handleUnaryCall<PublishRequest, PublishResponse> = (
		call: ServerUnaryCall<PublishRequest, PublishResponse>,
		callback: sendUnaryData<PublishResponse>
	) => {
		// Recievieng data from publisher
		const { Topic,Event } = call.request;

		console.log(`Got event ! ${Event?.Time?.toISOString()}: ${Event?.Topic} -> ${JSON.stringify(Event?.Data)}`)
		
		// Emitting event possibly can emit multiple events or chain them in more complex scenarios
		this.event_emitter.emit('event',Event)

		/** 
		 * Not a real thing going on here... 
		 * In real-world a database write should happen after emitting the event to subscribers 
		 * So this "sent" status can be something else... 
		 */ 
		const res: Partial<PublishResponse> = {};
		res.Status = 'sent';
		
		// Responsding to client
		callback(null, PublishResponse.fromJSON(res));
	}

	public subscribe: handleServerStreamingCall<SubscribeRequest, SubscribeResponse> = (
		call: ServerWritableStream<SubscribeRequest, SubscribeResponse>
	) => {
		const { Topic } = call.request;
	
		console.log(`[+] Subscribing into -> ${Topic}`)

		// Callback which will be triggered for each new publish event emitted
		const callback = (event:Event) => {
			// A check for peer - if client closed connection we destroy the event listener
			try {
				let peer = call.getPeer()
				// If the topic of event is same as subscriber query write event to client
				if(event.Topic === Topic) {
					console.log(`[${peer}] [*] Processing event -> ${event.Topic}`)
					call.write({Event:event})
				}
			} catch (error:any) {
				call.destroy(new ServiceError(status.ABORTED,'Peer is undefined'))
				this.event_emitter.off('event',callback)
				console.log(`[-] Removing listener -> ${event.Topic}`)
			}
		};

		// Handling data event
		
		this.event_emitter.on('event',callback)

		// Handling exceptions and close events

		call.on('close', () => {
			console.log(`[-] Closed subscription by client`)
			this.event_emitter.removeListener('event',callback)
		})

		call.on('error',(err:any) => {
			console.log(`[-] Error at stream ${err.message}`)
			this.event_emitter.removeListener('event',callback)
		})

		call.on('finish',() => {
			console.log(`[-] Finish subscription by client`)
			this.event_emitter.removeListener('event',callback)
		})
	}
}

export {
	PubsubService,
	PubsubServiceService
};