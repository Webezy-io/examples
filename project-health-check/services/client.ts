import { credentials, Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { promisify } from 'util';

import { HealthCheckClient } from './generated/HealthCheck';
import { SampleServiceClient } from './generated/SampleService';
import { HealthCheckRequest } from './generated/Health';
import { HealthCheckResponse } from './generated/Health';
import { SampleMsg } from './generated/samplePkg';



const _DEFAULT_OPTIONS = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
};

class projecthealthcheck {

	constructor(host: string = 'localhost:50051', metadata: Metadata = new Metadata()) {
		this.host = host;
		this.metadata = metadata;
		this.HealthCheck_client = new HealthCheckClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
		this.SampleService_client = new SampleServiceClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	public readonly HealthCheck_client: HealthCheckClient;
		public readonly SampleService_client: SampleServiceClient;

	/**
	* @public Check
	* @param {HealthCheckRequest} params request message {@link HealthCheckRequest}
	* @returns response message {@link HealthCheckResponse}
	*/
	public Check(params: HealthCheckRequest, metadata: Metadata = this.metadata): Promise<HealthCheckResponse> {
		return promisify<HealthCheckRequest, Metadata, HealthCheckResponse>(this.HealthCheck_client.check.bind(this.HealthCheck_client))(params, metadata);
	}

	/**
	* @public SampleRPC
	* @param {SampleMsg} params request message {@link SampleMsg}
	* @returns response message {@link SampleMsg}
	*/
	public SampleRPC(params: SampleMsg, metadata: Metadata = this.metadata): Promise<SampleMsg> {
		return promisify<SampleMsg, Metadata, SampleMsg>(this.SampleService_client.sampleRPC.bind(this.SampleService_client))(params, metadata);
	}


}

export const projecthealthcheckClient: projecthealthcheck = new projecthealthcheck()
