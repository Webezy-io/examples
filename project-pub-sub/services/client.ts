import { credentials, Metadata, ServiceError as _service_error } from '@grpc/grpc-js';
import { promisify } from 'util';

import { HealthCheckClient } from './generated/HealthCheck';
import { PubsubServiceClient } from './generated/PubsubService';
import { Observable } from 'rxjs';
import { HealthCheckRequest } from './generated/Health';
import { HealthCheckResponse } from './generated/Health';
import { PublishRequest } from './generated/pubsub';
import { PublishResponse } from './generated/pubsub';
import { SubscribeRequest } from './generated/pubsub';
import { SubscribeResponse } from './generated/pubsub';



const _DEFAULT_OPTIONS = {
	"grpc.keepalive_time_ms": 120000,
	"grpc.http2.min_time_between_pings_ms": 120000,
	"grpc.keepalive_timeout_ms": 20000,
	"grpc.http2.max_pings_without_data": 0,
	"grpc.keepalive_permit_without_calls": 1,
};

class projectpubsub {

	constructor(host: string = 'localhost:50051', metadata: Metadata = new Metadata()) {
		this.host = host;
		this.metadata = metadata;
		this.HealthCheck_client = new HealthCheckClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
		this.PubsubService_client = new PubsubServiceClient(this.host, credentials.createInsecure(),_DEFAULT_OPTIONS);
	}

	private readonly metadata: Metadata;
	private readonly host: string;
	public readonly HealthCheck_client: HealthCheckClient;
	public readonly PubsubService_client: PubsubServiceClient;
		public readonly PubsubService_client: PubsubServiceClient;

	/**
	* @public Check
	* @param {HealthCheckRequest} params request message {@link HealthCheckRequest}
	* @returns response message {@link HealthCheckResponse}
	*/
	public Check(params: HealthCheckRequest, metadata: Metadata = this.metadata): Promise<HealthCheckResponse> {
		return promisify<HealthCheckRequest, Metadata, HealthCheckResponse>(this.HealthCheck_client.check.bind(this.HealthCheck_client))(params, metadata);
	}

	/**
	* @public Publish
	* @param {PublishRequest} params request message {@link PublishRequest}
	* @returns response message {@link PublishResponse}
	*/
	public Publish(params: PublishRequest, metadata: Metadata = this.metadata): Promise<PublishResponse> {
		return promisify<PublishRequest, Metadata, PublishResponse>(this.PubsubService_client.publish.bind(this.PubsubService_client))(params, metadata);
	}
	/**
	* Subscribe
	* @param {SubscribeRequest} params request message {@link SubscribeRequest}
	*/
	public Subscribe(params: SubscribeRequest, metadata: Metadata = this.metadata): Observable<SubscribeResponse> {
		return new Observable(subscriber => {
		const stream = this.PubsubService_client.subscribe(params, metadata);
			stream.on('data',(res: SubscribeResponse) => {
				subscriber.next(res)
			}).on('end', () => {
				subscriber.complete()
			}).on('error', (err: any) => {
				subscriber.next(err)
				subscriber.complete()
			});
		})
	}

}

export const projectpubsubClient: projectpubsub = new projectpubsub()
