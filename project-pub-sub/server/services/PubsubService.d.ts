import { handleUnaryCall, handleServerStreamingCall, UntypedHandleCall } from '@grpc/grpc-js';
import { PubsubServiceServer, PubsubServiceService } from './generated/PubsubService';
import { PublishRequest, PublishResponse, SubscribeRequest, SubscribeResponse } from './generated/pubsub';
declare class PubsubService implements PubsubServiceServer {
    [method: string]: UntypedHandleCall;
    publish: handleUnaryCall<PublishRequest, PublishResponse>;
    subscribe: handleServerStreamingCall<SubscribeRequest, SubscribeResponse>;
}
export { PubsubService, PubsubServiceService };
