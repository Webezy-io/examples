import { projectmetadataClient as metadatumClient, } from './client';

import { Metadata } from '@grpc/grpc-js';
// Construct Metadata object
let metadata = new Metadata()
metadata.add('x-client-header','testvalue')
// Testing "Normal" way of unary without the ability to catch headers sent to client
metadatumClient.TestUnary({SimpleField:'Some message from client'},metadata)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.error('Error from server',err)
    })
    .then(() => {
        console.log("Finished client call")
    })
// Sample callback
function callback(err:any,res:any) {
    if (err) throw err;
    console.log(res)
}
// Changing metadata values and adding new key
metadata.add('x-client-header-2',"Other value")
// Sending unary request and cath headers
// note the different use case of the client
metadatumClient.Metadatum_client.testUnary({
    SimpleField:'Some message from client'
},metadata,callback)
    .on('metadata',listener => {
        console.log("Client Recieved Initial Metadata",listener)
    })
    .on('status',listener => {
        console.log("Client Recieved Trailing Metadata",listener.metadata)
    })