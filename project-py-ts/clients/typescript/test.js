"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
let sampleMsg = {
    SampleBool: false,
    SampleString: "Some Message From Typescript Client",
    SampleInt: 0
};
client_1.projectpytsClient.SampleRPC(sampleMsg).then(res => {
    console.log(`SampleBool: ${res.SampleBool}, SampleString: ${res.SampleString}, SampleInt: ${res.SampleInt}`);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("Finished call [SampleRPC] to server");
});
client_1.projectpytsClient.GetSample(sampleMsg)
    .then((res) => {
    console.log(res);
})
    .catch(err => {
    console.log(err);
})
    .finally(() => {
    console.log("Finished call [GetSample] to server");
});
//# sourceMappingURL=test.js.map