"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleServiceService = exports.SampleService = void 0;
const SampleService_1 = require("./generated/SampleService");
Object.defineProperty(exports, "SampleServiceService", { enumerable: true, get: function () { return SampleService_1.SampleServiceService; } });
const samplePkg_1 = require("./generated/samplePkg");
class SampleService {
    constructor() {
        this.sampleRPC = (call, callback) => {
            const { SampleString, SampleBool, SampleInt } = call.request;
            console.log(`Recieved message from client: ${SampleString}`);
            const res = {};
            res.SampleBool = !SampleBool;
            res.SampleInt = SampleInt + 1;
            res.SampleString = "Some message from typescript server";
            callback(null, samplePkg_1.SampleMsg.fromJSON(res));
        };
    }
}
exports.SampleService = SampleService;
//# sourceMappingURL=SampleService.js.map