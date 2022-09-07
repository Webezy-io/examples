import { Metadata } from '@grpc/grpc-js';
import { SampleServiceClient } from './generated/SampleService';
import { SampleMsg } from './generated/samplePkg';
declare class projectts {
    constructor(host?: string, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    readonly SampleService_client: SampleServiceClient;
    SampleRPC(params: SampleMsg, metadata?: Metadata): Promise<SampleMsg>;
}
export declare const projecttsClient: projectts;
export {};
