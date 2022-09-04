import { credentials, Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { promisify } from 'util';

import { SampleServiceClient } from './generated/SampleService';
import { SampleMsg } from './generated/samplePkg';
import { OtherMsg } from './generated/samplePkg';


export type _webezy_handler_Teststream = (error: _service_error | null, response: OtherMsg) => void;
export type _webezy_handler_NeMethod = (error: _service_error | null, response: SampleMsg) => void;

const _DEFAULT_OPTIONS = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
};

class projectpyts {
	private readonly SampleService_client: SampleServiceClient = new SampleServiceClient("localhost:50051", credentials.createInsecure(),_DEFAULT_OPTIONS)

	/**
	* SampleRPC
	*/
	public SampleRPC(params: SampleMsg, metadata: Metadata = new Metadata()): Promise<SampleMsg> {
		return promisify<SampleMsg, Metadata, SampleMsg>(this.SampleService_client.sampleRPC.bind(this.SampleService_client))(params, metadata);
	}

	/**
	* GetSample
	*/
	public GetSample(params: SampleMsg, metadata: Metadata = new Metadata()): Promise<OtherMsg> {
		return promisify<SampleMsg, Metadata, OtherMsg>(this.SampleService_client.getSample.bind(this.SampleService_client))(params, metadata);
	}

}

export const projectpytsClient: projectpyts = new projectpyts()
