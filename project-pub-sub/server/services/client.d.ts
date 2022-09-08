import { Metadata } from '@grpc/grpc-js';
import { HealthCheckClient } from './generated/HealthCheck';
import { Observable } from 'rxjs';
import { PubsubServiceClient } from './generated/PubsubService';
import { HealthCheckRequest } from './generated/Health';
import { HealthCheckResponse } from './generated/Health';
import { SetHealthRequest } from './generated/Health';
import { SetHealthResponse } from './generated/Health';
import { PublishRequest } from './generated/pubsub';
import { PublishResponse } from './generated/pubsub';
import { SubscribeRequest } from './generated/pubsub';
import { SubscribeResponse } from './generated/pubsub';
declare class projectpubsub {
    constructor(host?: string, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    readonly HealthCheck_client: HealthCheckClient;
    readonly PubsubService_client: PubsubServiceClient;
    Check(params: HealthCheckRequest, metadata?: Metadata): Promise<HealthCheckResponse>;
    Watch(params: HealthCheckRequest, metadata?: Metadata): Observable<HealthCheckResponse>;
    SetHealth(params: SetHealthRequest, metadata?: Metadata): Promise<SetHealthResponse>;
    Publish(params: PublishRequest, metadata?: Metadata): Promise<PublishResponse>;
    Subscribe(params: SubscribeRequest, metadata?: Metadata): Observable<SubscribeResponse>;
}
export declare const projectpubsubClient: projectpubsub;
export {};
