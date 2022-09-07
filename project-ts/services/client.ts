import { credentials, Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { promisify } from 'util';

import { SampleServiceClient } from './generated/SampleService';
import { SampleMsg } from './generated/samplePkg';



const _DEFAULT_OPTIONS = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
};

class projectts {

	constructor(host: string = 'localhost:50051', metadata: Metadata = new Metadata()) {
		this.host = host;
		this.metadata = metadata;
		this.SampleService_client = new SampleServiceClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	public readonly SampleService_client: SampleServiceClient;

	/**
	* @public SampleRPC
	* @param {SampleMsg} params request message {@link SampleMsg}
	* @returns response message {@link SampleMsg}
	*/
	public SampleRPC(params: SampleMsg, metadata: Metadata = this.metadata): Promise<SampleMsg> {
		return promisify<SampleMsg, Metadata, SampleMsg>(this.SampleService_client.sampleRPC.bind(this.SampleService_client))(params, metadata);
	}


}

export const projecttsClient: projectts = new projectts()
