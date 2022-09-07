import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { SampleServiceServer, SampleServiceService } from './generated/SampleService';
import { SampleMsg } from './generated/samplePkg';
declare class SampleService implements SampleServiceServer {
    [method: string]: UntypedHandleCall;
    sampleRPC: handleUnaryCall<SampleMsg, SampleMsg>;
}
export { SampleService, SampleServiceService };
