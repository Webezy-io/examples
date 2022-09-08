/**
 * @name publishEvents.js
 * @description - Instantiate a publisher client with 4 topics simulteniously
 * Each event will be produced with a random number which mocking a sensor data stream.
 * The events are limited to 1000 and then the stream ends.
 * Each event is triggered in 30ms interval don't go below it if you are testing the streams with Grafana it can cause the Grafana instance to get stuck (From personal experience)
 * @author Amit Shmulevitch
 * @version 0.0.1
 */

const client = require('../clients/typescript/client').projectpubsubClient;

let limit = 1000
let index = 0

let interval = setInterval(() => {
    index = index + 1
    client.Publish({Event:{Topic:'temperature',Data:{'value':randomIntFromInterval(40,50)},Time:new Date()},Topic:'temperature'})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    if (index > 1000) {
        console.log("Closing publisher")
        clearInterval(interval)
    }

    client.Publish({Event:{Topic:'pressure',Data:{'value':randomIntFromInterval(1000,1100)},Time:new Date()},Topic:'temperature'})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    if (index > 1000) {
        console.log("Closing publisher")
        clearInterval(interval)
    }

    client.Publish({Event:{Topic:'humidity',Data:{'value':randomIntFromInterval(80,90)},Time:new Date()},Topic:'humidity'})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    if (index > 1000) {
        console.log("Closing publisher")
        clearInterval(interval)
    }

    client.Publish({Event:{Topic:'vibration',Data:{'value':randomIntFromInterval(200,500)},Time:new Date()},Topic:'vibration'})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
    if (index > limit) {
        console.log("Closing publisher")
        clearInterval(interval)
    }
},30)


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
