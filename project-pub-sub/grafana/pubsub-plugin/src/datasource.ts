import defaults from 'lodash/defaults';
import { PubsubServiceClient } from './model/PubsubServiceServiceClientPb'
import { HealthCheckClient } from './model/HealthCheckServiceClientPb'

import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
  FieldType,
  CircularDataFrame,
  LoadingState,
} from '@grafana/data';

import { MyQuery, MyDataSourceOptions, defaultQuery } from './types';
import { HealthCheckRequest } from 'model/Health_pb';
import { merge, Observable } from 'rxjs';
import { SubscribeRequest, SubscribeResponse } from 'model/pubsub_pb';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {

  client: PubsubServiceClient;
  health: HealthCheckClient;
  host: string;

  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
    this.host = instanceSettings.jsonData.host || 'http://localhost:9000';
    // Insatntiating new clients for HealthCheck Service And Pubsub Service
    // Passing default localhost at port 9000 (Envoy proxy) - or getting jsonData var from user.
    this.client = new PubsubServiceClient(this.host)
    this.health = new HealthCheckClient(this.host)
  }

  query(options: DataQueryRequest<MyQuery>): Observable<DataQueryResponse> {
    
    const { range } = options;
    const from = range!.from.valueOf();
    const to = range!.to.valueOf();

    const streams = options.targets.map(target => {

      const query = defaults(target, defaultQuery);
      
      return new Observable<DataQueryResponse>((subscriber) => {
        const frame = new CircularDataFrame({
          append: 'tail',
          capacity: 100000,
        });

        let topic_subscribe = new SubscribeRequest().setTopic(query.topic)
        const duration = to - from;

        function callback(response: SubscribeResponse) {
          console.log(response.getEvent()?.getData())
          // frame.add({ time: Date.now(), value: Math.sin((2 * Math.PI * query.frequency) / duration) *Math.random()  });
          frame.add({ time: Date.now(), value: Math.sin((2 * Math.PI * 3) / duration) *Math.random()  });
        
          subscriber.next({
            data: [frame],
            key: query.refId,
            state: LoadingState.Streaming,
          });
        }

        frame.refId = query.refId;

        frame.addField({ name: 'time', type: FieldType.time , labels: {'topic':query.topic}});
        frame.addField({ name: 'value', type: FieldType.number, labels: {'topic':query.topic} });

        this.client.subscribe(topic_subscribe).on('data',callback).on('end',() => {
          subscriber.error(Error("Ended the stream !"))

        }).on('error',(err: any) => {
          console.log("Error",err)
          subscriber.error(new Error('An error occurred: ' + err.message ))
        })
      });
    })
    return merge(...streams);
  }

  async testDatasource() {

    // Checking for HealthService

    let health_check_request = new HealthCheckRequest()

    health_check_request.setService('PubsubService')

    try {
      let health_check_response = await this.health.check(health_check_request,{'custom-header-1':'some-value'})
      
      
      if (health_check_response.getStatus() === 1) {
        // Implement a health check for your data source.
        return {
          status: 'success',
          message: 'Success for HealthCheck: '+this.host,
        };
      } else {
        console.log(health_check_response)
        return {
          status: 'fail',
          message: 'Some error occurd during HealthCheck: '+this.host,
        };
      }

    } catch (error: any) {
      console.log(error)
      return {
        status: 'fail',
        message: 'Some error occurd during HealthCheck: '+this.host+' : '+error.message,
      };
    }
  
  }
}
