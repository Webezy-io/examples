import { Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { SampleMsg } from './generated/samplePkg';
import { OtherMsg } from './generated/samplePkg';
export declare type _webezy_handler_Teststream = (error: _service_error | null, response: OtherMsg) => void;
export declare type _webezy_handler_NeMethod = (error: _service_error | null, response: SampleMsg) => void;
declare class projectpyts {
    private readonly SampleService_client;
    SampleRPC(params: SampleMsg, metadata?: Metadata): Promise<SampleMsg>;
    GetSample(params: SampleMsg, metadata?: Metadata): Promise<OtherMsg>;
}
export declare const projectpytsClient: projectpyts;
export {};
