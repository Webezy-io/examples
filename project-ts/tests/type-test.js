"use strict";
exports.__esModule = true;
var client_1 = require("../clients/typescript/client");
var message = { SampleBool: true, SampleInt: 0, SampleString: 'Test from ts client' };
client_1.projecttsClient.SampleRPC(message)
    .then(function (res) {
    console.log(res);
})["catch"](function (err) {
    console.log(err);
});
