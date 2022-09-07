const client = require('../clients/typescript/client').projecttsClient;

client.SampleRPC({SampleBool:false,SampleInt:0,SampleString:"Some message from client"})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })