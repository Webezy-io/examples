import { Metadata } from '@grpc/grpc-js';
import { PubsubServiceClient } from './generated/PubsubService';
import { Observable } from 'rxjs';
import { PublishRequest } from './generated/pubsub';
import { PublishResponse } from './generated/pubsub';
import { SubscribeRequest } from './generated/pubsub';
import { SubscribeResponse } from './generated/pubsub';
declare class projectpubsub {
    constructor(host?: string, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    readonly PubsubService_client: PubsubServiceClient;
    Publish(params: PublishRequest, metadata?: Metadata): Promise<PublishResponse>;
    Subscribe(params: SubscribeRequest, metadata?: Metadata): Observable<SubscribeResponse>;
}
export declare const projectpubsubClient: projectpubsub;
export {};
