"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleServiceClient = exports.SampleServiceService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const samplePkg_1 = require("./samplePkg");
exports.SampleServiceService = {
    sampleRPC: {
        path: "/SampleService/SampleRPC",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(samplePkg_1.SampleMsg.encode(value).finish()),
        requestDeserialize: (value) => samplePkg_1.SampleMsg.decode(value),
        responseSerialize: (value) => Buffer.from(samplePkg_1.SampleMsg.encode(value).finish()),
        responseDeserialize: (value) => samplePkg_1.SampleMsg.decode(value),
    },
};
exports.SampleServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.SampleServiceService, "SampleService");
//# sourceMappingURL=SampleService.js.map