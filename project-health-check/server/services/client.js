"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projecthealthcheckClient = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const HealthCheck_1 = require("./generated/HealthCheck");
const SampleService_1 = require("./generated/SampleService");
const _DEFAULT_OPTIONS = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
};
class projecthealthcheck {
    constructor(host = 'localhost:50051', metadata = new grpc_js_1.Metadata()) {
        this.host = host;
        this.metadata = metadata;
        this.HealthCheck_client = new HealthCheck_1.HealthCheckClient(this.host, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTIONS);
        this.SampleService_client = new SampleService_1.SampleServiceClient(this.host, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTIONS);
    }
    Check(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.HealthCheck_client.check.bind(this.HealthCheck_client))(params, metadata);
    }
    SampleRPC(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.SampleService_client.sampleRPC.bind(this.SampleService_client))(params, metadata);
    }
}
exports.projecthealthcheckClient = new projecthealthcheck();
//# sourceMappingURL=client.js.map