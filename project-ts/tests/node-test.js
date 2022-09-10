const client = require('../clients/typescript/client').projecttsClient;

let message = { SampleBool: true, SampleInt: 0, SampleString: 'Test from js client' }

client.SampleRPC(message)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })