"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubServiceService = exports.PubsubService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("./utils/error");
const PubsubService_1 = require("./generated/PubsubService");
Object.defineProperty(exports, "PubsubServiceService", { enumerable: true, get: function () { return PubsubService_1.PubsubServiceService; } });
class PubsubService {
    constructor() {
        this.publish = (call, callback) => {
            return callback(new error_1.ServiceError(grpc_js_1.status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'), null);
        };
        this.subscribe = (call) => {
            call.destroy(new error_1.ServiceError(grpc_js_1.status.UNIMPLEMENTED, '[Webezy] Method is not yet implemented !'));
        };
    }
}
exports.PubsubService = PubsubService;
//# sourceMappingURL=PubsubService.js.map