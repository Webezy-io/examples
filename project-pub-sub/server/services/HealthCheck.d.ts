import { handleUnaryCall, handleServerStreamingCall, UntypedHandleCall } from '@grpc/grpc-js';
import { HealthCheckServer, HealthCheckService } from './generated/HealthCheck';
import { HealthCheckRequest, HealthCheckResponse, SetHealthRequest, SetHealthResponse } from './generated/Health';
declare class HealthCheck implements HealthCheckServer {
    [method: string]: UntypedHandleCall;
    check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
    watch: handleServerStreamingCall<HealthCheckRequest, HealthCheckResponse>;
    setHealth: handleUnaryCall<SetHealthRequest, SetHealthResponse>;
}
export { HealthCheck, HealthCheckService };
