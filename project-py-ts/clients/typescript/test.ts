import { projectpytsClient } from './client';
import { OtherMsg, SampleMsg } from './generated/samplePkg';

let sampleMsg:SampleMsg = {
    SampleBool:false,
    SampleString:"Some Message From Typescript Client",
    SampleInt:0
}

projectpytsClient.SampleRPC(sampleMsg).then(res => {
        console.log(`SampleBool: ${res.SampleBool}, SampleString: ${res.SampleString}, SampleInt: ${res.SampleInt}`)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        console.log("Finished call [SampleRPC] to server")
    })

projectpytsClient.GetSample(sampleMsg)
    .then((res: OtherMsg) => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log("Finished call [GetSample] to server")
    })
