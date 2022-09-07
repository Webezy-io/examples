// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleUnaryCall, handleServerStreamingCall, handleBidiStreamingCall, sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream, status, UntypedHandleCall } from '@grpc/grpc-js';
import { ServiceError } from './utils/error';
import { PubsubServiceServer, PubsubServiceService } from './generated/PubsubService';
import { PublishRequest, PublishResponse, SubscribeRequest, SubscribeResponse } from './generated/pubsub';

class PubsubService implements PubsubServiceServer {
	[method: string]: UntypedHandleCall;

	public publish: handleUnaryCall<PublishRequest, PublishResponse> = (
		call: ServerUnaryCall<PublishRequest, PublishResponse>,
		callback: sendUnaryData<PublishResponse>
	) => {
		// const res: Partial<PublishResponse> = {};
		// const { Topic } = call.request;
		// callback(null, PublishResponse.fromJSON(res));
		return callback(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
	}

	public subscribe: handleServerStreamingCall<SubscribeRequest, SubscribeResponse> = (
		call: ServerWritableStream<SubscribeRequest, SubscribeResponse>
	) => {
		// const { Topic } = call.request;
		// call.write()
		call.destroy(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'))
	}
}

export {
	PubsubService,
	PubsubServiceService
};