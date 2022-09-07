// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleUnaryCall, handleServerStreamingCall, handleBidiStreamingCall, sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream, status, UntypedHandleCall } from '@grpc/grpc-js';
// import { ServiceError } from './utils/error';
import { HealthCheckServer, HealthCheckService } from './generated/HealthCheck';
import { HealthCheckRequest, HealthCheckResponse, ServingStatus } from './generated/Health';

class HealthCheck implements HealthCheckServer {
	[method: string]: UntypedHandleCall;

	public check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse> = (
		call: ServerUnaryCall<HealthCheckRequest, HealthCheckResponse>,
		callback: sendUnaryData<HealthCheckResponse>
	) => {
		const res: Partial<HealthCheckResponse> = {};
		const { service } = call.request;

		if (service === 'PubsubService' ) {
			res.status = ServingStatus.SERVING
		} else {
			res.status = ServingStatus.NOT_FOUND
		}

		callback(null, HealthCheckResponse.fromJSON(res));
		// return callback(new ServiceError(status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
	}
}

export {
	HealthCheck,
	HealthCheckService
};