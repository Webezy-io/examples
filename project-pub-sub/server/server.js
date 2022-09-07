"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const PubsubService_1 = require("./services/PubsubService");
let _PORT = 50051;
let _HOST = '0.0.0.0';
process.argv.forEach(function (val, index, array) {
    if (val === '--port') {
        _PORT = parseInt(array[index + 1]);
    }
    else if (val === '--host') {
        _HOST = array[index + 1];
    }
});
let _ADDR = `${_HOST}:${_PORT}`;
const server = new grpc_js_1.Server({
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1,
});
server.addService(PubsubService_1.PubsubServiceService, new PubsubService_1.PubsubService());
server.bindAsync(_ADDR, grpc_js_1.ServerCredentials.createInsecure(), (err, bindPort) => {
    if (err) {
        throw err;
    }
    console.log(`[webezy] Starting gRPC:Server:${bindPort}`, `at-> ${new Date().toLocaleString()}`);
    server.start();
});
//# sourceMappingURL=server.js.map