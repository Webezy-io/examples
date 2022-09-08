/// <reference types="node" />
import { handleUnaryCall, handleServerStreamingCall, UntypedHandleCall } from '@grpc/grpc-js';
import { PubsubServiceServer, PubsubServiceService } from './generated/PubsubService';
import { PublishRequest, PublishResponse, SubscribeRequest, SubscribeResponse } from './generated/pubsub';
import EventEmitter from 'events';
interface Api<T> {
    [method: string]: T;
}
declare type ApiType<T> = Api<T> & {
    event_emitter: EventEmitter;
};
declare class PubsubService implements PubsubServiceServer, ApiType<UntypedHandleCall> {
    [method: string]: any;
    event_emitter: EventEmitter;
    constructor();
    publish: handleUnaryCall<PublishRequest, PublishResponse>;
    subscribe: handleServerStreamingCall<SubscribeRequest, SubscribeResponse>;
}
export { PubsubService, PubsubServiceService };
