"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubsubServiceService = exports.PubsubService = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const error_1 = require("./utils/error");
const PubsubService_1 = require("./generated/PubsubService");
Object.defineProperty(exports, "PubsubServiceService", { enumerable: true, get: function () { return PubsubService_1.PubsubServiceService; } });
const pubsub_1 = require("./generated/pubsub");
const events_1 = __importDefault(require("events"));
class PubsubService {
    constructor() {
        this.publish = (call, callback) => {
            var _a;
            const { Topic, Event } = call.request;
            console.log(`Got event ! ${(_a = Event === null || Event === void 0 ? void 0 : Event.Time) === null || _a === void 0 ? void 0 : _a.toISOString()}: ${Event === null || Event === void 0 ? void 0 : Event.Topic} -> ${JSON.stringify(Event === null || Event === void 0 ? void 0 : Event.Data)}`);
            this.event_emitter.emit('event', Event);
            const res = {};
            res.Status = 'sent';
            callback(null, pubsub_1.PublishResponse.fromJSON(res));
        };
        this.subscribe = (call) => {
            const { Topic } = call.request;
            console.log(`[+] Subscribing into -> ${Topic}`);
            const callback = (event) => {
                try {
                    let peer = call.getPeer();
                    console.log("Peer", peer);
                    console.log(`[?] Recieved event -> ${event.Topic}`);
                    if (event.Topic === Topic) {
                        console.log(`[*] Processing event -> ${event.Topic}`);
                        call.write({ Event: event });
                    }
                }
                catch (error) {
                    call.destroy(new error_1.ServiceError(grpc_js_1.status.ABORTED, 'Peer is undefined'));
                    this.event_emitter.off('event', callback);
                    console.log(`[-] Removing listener -> ${event.Topic}`);
                }
            };
            this.event_emitter.on('event', callback);
            call.on('close', () => {
                console.log(`[-] Closed subscription`);
                this.event_emitter.removeListener('event', callback);
            });
            call.on('error', (err) => {
                console.log(`[-] Error at stream ${err}`);
                this.event_emitter.removeListener('event', callback);
            });
        };
        this.event_emitter = new events_1.default();
    }
}
exports.PubsubService = PubsubService;
//# sourceMappingURL=PubsubService.js.map