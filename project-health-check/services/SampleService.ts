// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleUnaryCall, handleServerStreamingCall, handleBidiStreamingCall, sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream, status, UntypedHandleCall } from '@grpc/grpc-js';
import { ServiceError } from './utils/error';
import { SampleServiceServer, SampleServiceService } from './generated/SampleService';
import { SampleMsg } from './generated/samplePkg';

class SampleService implements SampleServiceServer {
	[method: string]: UntypedHandleCall;

	public sampleRPC: handleUnaryCall<SampleMsg, SampleMsg> = (
		call: ServerUnaryCall<SampleMsg, SampleMsg>,
		callback: sendUnaryData<SampleMsg>
	) => {
		// const res: Partial<SampleMsg> = {};
		// const { SampleString, SampleBool, SampleInt } = call.request;
		// callback(null, SampleMsg.fromJSON(res));
		return callback(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
	}
}

export {
	SampleService,
	SampleServiceService
};