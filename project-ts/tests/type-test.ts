import { projecttsClient } from '../clients/typescript/client';
import { SampleMsg } from '../clients/typescript/generated/samplePkg';
import { ServiceError } from '@grpc/grpc-js';

let message:SampleMsg = { SampleBool: true, SampleInt: 0, SampleString: 'Test from ts client' }

projecttsClient.SampleRPC(message)
    .then((res:SampleMsg) => {
        console.log(res)
    })
    .catch((err:ServiceError) => {
        console.log(err)
    })