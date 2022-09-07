"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleServiceService = exports.SampleService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("./utils/error");
const SampleService_1 = require("./generated/SampleService");
Object.defineProperty(exports, "SampleServiceService", { enumerable: true, get: function () { return SampleService_1.SampleServiceService; } });
class SampleService {
    constructor() {
        this.sampleRPC = (call, callback) => {
            return callback(new error_1.ServiceError(grpc_js_1.status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
        };
    }
}
exports.SampleService = SampleService;
//# sourceMappingURL=SampleService.js.map