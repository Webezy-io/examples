"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectpubsubClient = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const HealthCheck_1 = require("./generated/HealthCheck");
const rxjs_1 = require("rxjs");
const PubsubService_1 = require("./generated/PubsubService");
const _DEFAULT_OPTIONS = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
};
class projectpubsub {
    constructor(host = 'localhost:9000', metadata = new grpc_js_1.Metadata()) {
        this.host = host;
        this.metadata = metadata;
        this.HealthCheck_client = new HealthCheck_1.HealthCheckClient(this.host, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTIONS);
        this.PubsubService_client = new PubsubService_1.PubsubServiceClient(this.host, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTIONS);
    }
    Check(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.HealthCheck_client.check.bind(this.HealthCheck_client))(params, metadata);
    }
    Watch(params, metadata = this.metadata) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.HealthCheck_client.watch(params, metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.next(err);
                subscriber.complete();
            });
        });
    }
    SetHealth(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.HealthCheck_client.setHealth.bind(this.HealthCheck_client))(params, metadata);
    }
    Publish(params, metadata = this.metadata) {
        return (0, util_1.promisify)(this.PubsubService_client.publish.bind(this.PubsubService_client))(params, metadata);
    }
    Subscribe(params, metadata = this.metadata) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.PubsubService_client.subscribe(params, metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.next(err);
                subscriber.complete();
            });
        });
    }
}
exports.projectpubsubClient = new projectpubsub();
//# sourceMappingURL=client.js.map