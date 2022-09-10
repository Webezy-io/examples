/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { SampleMsg } from "./samplePkg";
export declare type SampleServiceService = typeof SampleServiceService;
export declare const SampleServiceService: {
    readonly sampleRPC: {
        readonly path: "/SampleService/SampleRPC";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SampleMsg) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SampleMsg;
        readonly responseSerialize: (value: SampleMsg) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SampleMsg;
    };
};
export interface SampleServiceServer extends UntypedServiceImplementation {
    sampleRPC: handleUnaryCall<SampleMsg, SampleMsg>;
}
export interface SampleServiceClient extends Client {
    sampleRPC(request: SampleMsg, callback: (error: ServiceError | null, response: SampleMsg) => void): ClientUnaryCall;
    sampleRPC(request: SampleMsg, metadata: Metadata, callback: (error: ServiceError | null, response: SampleMsg) => void): ClientUnaryCall;
    sampleRPC(request: SampleMsg, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SampleMsg) => void): ClientUnaryCall;
}
export declare const SampleServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): SampleServiceClient;
    service: typeof SampleServiceService;
};
