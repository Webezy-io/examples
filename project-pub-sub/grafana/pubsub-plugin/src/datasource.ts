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
import { HealthCheckRequest, ServingStatus } from 'model/Health_pb';
import { merge, Observable } from 'rxjs';
import { SubscribeRequest, SubscribeResponse } from 'model/pubsub_pb';

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {

  health: HealthCheckClient;
  host: string;
  subscription: any;
  client: PubsubServiceClient;

  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);

    this.host = instanceSettings.jsonData.host || 'http://localhost:9000';
    // Insatntiating new clients for HealthCheck Service And Pubsub Service
    // Passing default localhost at port 9000 (Envoy proxy) - or getting jsonData var from user.
    this.health = new HealthCheckClient(this.host);
    this.client = new PubsubServiceClient(this.host);
  }

  query(options: DataQueryRequest<MyQuery>): Observable<DataQueryResponse> {
    
    const streams = options.targets.map(target => {
    const query = defaults(target, defaultQuery);
      
      // Checking if subscription is already found on DataSource class.
      // If yes it will cancel the subscription every time a re-query is triggered,
      // so no duplicate subscription scenario will happen.
      if (this.subscription !== undefined) {
         this.subscription.cancel()
      }

      return new Observable<DataQueryResponse>((subscriber) => {
        const frame = new CircularDataFrame({
          append: 'tail',
          capacity: 100000,
        });

        let topic_subscribe = new SubscribeRequest().setTopic(query.topic)

        // Callback to be tirggered for each data event
        function callback(response: SubscribeResponse) {

          // Adding data input from stream to frame
          frame.add({ time: response.getEvent()?.getTime()?.toDate(), value: response.getEvent()?.getData()?.toJavaScript()['value']  });
          // Passing the frame
          subscriber.next({
            data: [frame],
            key: query.refId,
            state: LoadingState.Streaming,
          });
        }
        frame.refId = query.refId;

        frame.addField({ name: 'time', type: FieldType.time , labels: {'topic':query.topic}});
        frame.addField({ name: 'value', type: FieldType.number, labels: {'topic':query.topic} });
        
        // Subscribing to topic chosed by user at query level
        this.subscription = this.client.subscribe(topic_subscribe).on('data',callback).on('end',() => {
          throw new Error("Ended the stream")
        }).on('error',(err: any) => {
          console.log("Error",err)
          throw new Error("Ended the stream")
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
      
      console.log(health_check_response)
      
      if (health_check_response.getStatus() === ServingStatus.SERVING) {
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
