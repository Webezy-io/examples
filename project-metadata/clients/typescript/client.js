"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectmetadataClient = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const Metadatum_1 = require("./generated/Metadatum");
const _DEFAULT_OPTIONS = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
};
class projectmetadata {
    constructor(host = 'localhost:50051', metadata = new grpc_js_1.Metadata()) {
        this.host = host;
        this.metadata = metadata;
        this.Metadatum_client = new Metadatum_1.MetadatumClient(this.host, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTIONS);
    }
    TestUnary(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.Metadatum_client.testUnary.bind(this.Metadatum_client))(params, metadata);
    }
}
exports.projectmetadataClient = new projectmetadata();
//# sourceMappingURL=client.js.map