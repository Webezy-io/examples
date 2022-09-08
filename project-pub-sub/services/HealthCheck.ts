// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleUnaryCall, handleServerStreamingCall, handleBidiStreamingCall, sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream, status, UntypedHandleCall } from '@grpc/grpc-js';
import { ServiceError } from './utils/error';
import { HealthCheckServer, HealthCheckService } from './generated/HealthCheck';
import { HealthCheckRequest, HealthCheckResponse, SetHealthRequest, SetHealthResponse } from './generated/Health';

class HealthCheck implements HealthCheckServer {
	[method: string]: UntypedHandleCall;

	public check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse> = (
		call: ServerUnaryCall<HealthCheckRequest, HealthCheckResponse>,
		callback: sendUnaryData<HealthCheckResponse>
	) => {
		// const res: Partial<HealthCheckResponse> = {};
		// const { service } = call.request;
		// callback(null, HealthCheckResponse.fromJSON(res));
		return callback(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
	}

	public watch: handleServerStreamingCall<HealthCheckRequest, HealthCheckResponse> = (
		call: ServerWritableStream<HealthCheckRequest, HealthCheckResponse>
	) => {
		// const { service } = call.request;
		// call.write()
		call.destroy(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'))
	}

	public setHealth: handleUnaryCall<SetHealthRequest, SetHealthResponse> = (
		call: ServerUnaryCall<SetHealthRequest, SetHealthResponse>,
		callback: sendUnaryData<SetHealthResponse>
	) => {
		// const res: Partial<SetHealthResponse> = {};
		// const { Service, Status } = call.request;
		// callback(null, SetHealthResponse.fromJSON(res));
		return callback(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
	}
}

export {
	HealthCheck,
	HealthCheckService
};