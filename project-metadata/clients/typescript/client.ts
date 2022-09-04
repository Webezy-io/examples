import { credentials, Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { promisify } from 'util';

import { MetadatumClient } from './generated/Metadatum';
import { TestMetadata } from './generated/metadata';



const _DEFAULT_OPTIONS = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
};

class projectmetadata {

	constructor(host: string = 'localhost:50051', metadata: Metadata = new Metadata()) {
		this.host = host;
		this.metadata = metadata;
		this.Metadatum_client = new MetadatumClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	public readonly Metadatum_client: MetadatumClient;

	/**
	* @public TestUnary
	* @param {TestMetadata} params request message {@link TestMetadata}
	* @returns response message {@link TestMetadata}
	*/
	public TestUnary(params: TestMetadata, metadata: Metadata = this.metadata): Promise<TestMetadata> {
		return promisify<TestMetadata, Metadata, TestMetadata>(this.Metadatum_client.testUnary.bind(this.Metadatum_client))(params, metadata);
	}

}

export const projectmetadataClient: projectmetadata = new projectmetadata()
