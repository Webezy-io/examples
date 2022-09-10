"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleMsg = void 0;
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseSampleMsg() {
    return { SampleString: "", SampleBool: false, SampleInt: 0 };
}
exports.SampleMsg = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.SampleString !== "") {
            writer.uint32(10).string(message.SampleString);
        }
        if (message.SampleBool === true) {
            writer.uint32(16).bool(message.SampleBool);
        }
        if (message.SampleInt !== 0) {
            writer.uint32(24).int32(message.SampleInt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSampleMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SampleString = reader.string();
                    break;
                case 2:
                    message.SampleBool = reader.bool();
                    break;
                case 3:
                    message.SampleInt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            SampleString: isSet(object.SampleString) ? String(object.SampleString) : "",
            SampleBool: isSet(object.SampleBool) ? Boolean(object.SampleBool) : false,
            SampleInt: isSet(object.SampleInt) ? Number(object.SampleInt) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.SampleString !== undefined && (obj.SampleString = message.SampleString);
        message.SampleBool !== undefined && (obj.SampleBool = message.SampleBool);
        message.SampleInt !== undefined && (obj.SampleInt = Math.round(message.SampleInt));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSampleMsg();
        message.SampleString = (_a = object.SampleString) !== null && _a !== void 0 ? _a : "";
        message.SampleBool = (_b = object.SampleBool) !== null && _b !== void 0 ? _b : false;
        message.SampleInt = (_c = object.SampleInt) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=samplePkg.js.map