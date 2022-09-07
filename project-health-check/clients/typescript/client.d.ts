import { Metadata } from '@grpc/grpc-js';
import { HealthCheckClient } from './generated/HealthCheck';
import { SampleServiceClient } from './generated/SampleService';
import { HealthCheckRequest } from './generated/Health';
import { HealthCheckResponse } from './generated/Health';
import { SampleMsg } from './generated/samplePkg';
declare class projecthealthcheck {
    constructor(host?: string, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    readonly HealthCheck_client: HealthCheckClient;
    readonly SampleService_client: SampleServiceClient;
    Check(params: HealthCheckRequest, metadata?: Metadata): Promise<HealthCheckResponse>;
    SampleRPC(params: SampleMsg, metadata?: Metadata): Promise<SampleMsg>;
}
export declare const projecthealthcheckClient: projecthealthcheck;
export {};
