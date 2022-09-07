import { Server, ServerCredentials } from '@grpc/grpc-js';

import { HealthCheck, HealthCheckService } from './services/HealthCheck';
import { SampleService, SampleServiceService } from './services/SampleService';
let _PORT:number = 50051;
let _HOST:string = '0.0.0.0';

process.argv.forEach(function (val, index, array) {
	if (val === '--port') {
		_PORT = parseInt(array[index + 1]);
	} else if (val === '--host') {
		_HOST = array[index + 1];
	}
});
let _ADDR = `${_HOST}:${_PORT}`
const server = new Server({
	'grpc.max_receive_message_length': -1,
	'grpc.max_send_message_length': -1,
});

server.addService(HealthCheckService, new HealthCheck());
server.addService(SampleServiceService, new SampleService());

server.bindAsync(_ADDR, ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
	if (err) {
		throw err;
	}

	console.log(`[webezy] Starting gRPC:Server:${bindPort}`,`at-> ${ new Date().toLocaleString() }`);
	server.start();
});
