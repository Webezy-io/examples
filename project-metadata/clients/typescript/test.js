"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const grpc_js_1 = require("@grpc/grpc-js");
let metadata = new grpc_js_1.Metadata();
metadata.add('x-client-header', 'testvalue');
client_1.projectmetadataClient.TestUnary({ SimpleField: 'Some message from client' }, metadata)
    .then(res => {
    console.log(res);
})
    .catch(err => {
    console.error('Error from server', err);
})
    .then(() => {
    console.log("Finished client call");
});
function callback(err, res) {
    if (err)
        throw err;
    console.log(res);
}
metadata.add('x-client-header-2', "Other value");
client_1.projectmetadataClient.Metadatum_client.testUnary({
    SimpleField: 'Some message from client'
}, metadata, callback)
    .on('metadata', listener => {
    console.log("Client Recieved Initial Metadata", listener);
})
    .on('status', listener => {
    console.log("Client Recieved Trailing Metadata", listener.metadata);
});
//# sourceMappingURL=test.js.map