"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckService = exports.HealthCheck = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("./utils/error");
const HealthCheck_1 = require("./generated/HealthCheck");
Object.defineProperty(exports, "HealthCheckService", { enumerable: true, get: function () { return HealthCheck_1.HealthCheckService; } });
class HealthCheck {
    constructor() {
        this.check = (call, callback) => {
            return callback(new error_1.ServiceError(grpc_js_1.status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
        };
    }
}
exports.HealthCheck = HealthCheck;
//# sourceMappingURL=HealthCheck.js.map