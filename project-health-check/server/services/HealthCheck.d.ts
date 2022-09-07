import { handleUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { HealthCheckServer, HealthCheckService } from './generated/HealthCheck';
import { HealthCheckRequest, HealthCheckResponse } from './generated/Health';
declare class HealthCheck implements HealthCheckServer {
    [method: string]: UntypedHandleCall;
    check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
}
export { HealthCheck, HealthCheckService };
