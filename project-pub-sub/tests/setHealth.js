/**
 * @name SetHealth.js
 * @description - A health client checker and manipulator.
 * If passed with argument other then "serving" it will cause the service to be declared as NOT_SERVING on HealthCheck Service.
 * Usage : node SetHealth.js serving (Will set the service status to SERVING) / node SetHealth.js not (Will change it to NOT_SERViNG)
 * @author Amit Shmulevitch
 * @version 0.0.1
 */

const { ServingStatus } = require('../clients/typescript/generated/Health');

const client = require('../clients/typescript/client').projectpubsubClient;

const health = process.argv.splice(2)

let status = health.includes('serving') ? ServingStatus.SERVING : ServingStatus.NOT_SERVING

client.SetHealth({Service:'PubsubService',Status:status})
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        console.log('Changed service "PubsubService" to not serving status')
    })