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
		// Recieving request
		const { SampleString, SampleBool, SampleInt } = call.request;
		console.log(`Recieved message from client: ${SampleString}`)
		// Preparing response
		const res: Partial<SampleMsg> = {};
		res.SampleBool = !SampleBool;
		res.SampleInt = SampleInt + 1;
		res.SampleString = "Some message from typescript server"
		
		// Returning result
		callback(null, SampleMsg.fromJSON(res));
	}
}

export {
	SampleService,
	SampleServiceService
};