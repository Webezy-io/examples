# projectpubsub

This project has been generated thanks to ```Webezy.io``` CLI.
For start using it please run 

```sh
webezy run --build
```

For more information please visit https://www.webezy.io/docs

# Main componentes

This project conssisting with multiple software componentes that working togther to achieve a ```"publisher + subscriber + Real-time consumer"``` architecture.

* __pubsub-app__ : Its the main feature of this project and it is built using [```Webezy.io```](https://www.webezy.io) CLI, it is sample template server which hold ```PubsubService``` publisher-subscriber service.

* __pubsub-monitor__ : It is the open-source project called [```Grafana```](https://grafana.com) it is used to demonstrate how versetaile ```Webezy.io``` project structure is and how to ingest  streaming data into visualization tools.

* __pubsub-plugin__ : Grafana datasource custom plugin for ingesting streaming in real-time directly from pubsub service.

* __pubsub-web__ : Web proxy again by open-source project called [```Envoy proxy```](https://www.envoyproxy.io/), it is used to channel http requests and loadbalance our gRPC service and handle smoothly the transition from http/1 -> http/2.

* __worker__ : It is standalone worker utulizing [```Celery```](https://docs.celeryq.dev/en/stable/index.html), it is powerful task schdueler that we use here just to test our publish Endpoint and to configure it easly how we want it to be ran.

# Usage

1. Run the docker-compose file:
```sh
docker-compose up --build -d
```

2. Open your browser at (localhost)[http://localhost:3000] - A ```Grafana``` dashboard should be available with the creds you specified in the docker-compose.yaml file

3. Make sure you installing the plugin and can test it via HealthCheck endpoint inside ```Grafana```. Goto ```Configuration -> Datasources``` and add ```pubsub-plugin``` after successfull testing can go ahead with the next steps.

4. Open up new dashboard and create new panel with the ```pubsub-plugin``` (If no new events is sent to subscriber e.g ```Grafana``` dashboard the channel will be closed and error will be shown, dont worry just re-query after events are sent in next step)

5. under you root dir of project run:
```sh
celery -A worker worker -l INFO -B
```
It will instantiate a ```celery``` worker that excute publish task every 1 sec.

6. Go back to you ```Grafana``` Dashboard and re-query or refresh if passed 30 sec then last query.

7. Enjoy the streams.

# Development

This project can be further developed in few paths :

* Grafana plugin :
    - Main directory under grafana/pubsub-plugin - make changes according to this tutorial and re-build code with 
    ```sh
    yarn dev
    ```
    then restart the grafana container which should re-install the plugins
    [Grafana Plugin Tutorial](https://grafana.com/tutorials/build-a-data-source-plugin/)

* Pubsub Service :
    - Main service can be further enriched with more complex event hanlding algorithms under ```services/PubsubService.ts```

* Clients :
    - More client code can be further developed to send and respond to event or maybe even to chain some events