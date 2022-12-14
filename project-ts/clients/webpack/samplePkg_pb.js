// source: samplePkg.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.domain.samplePkg.v1.SampleMsg', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.domain.samplePkg.v1.SampleMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.domain.samplePkg.v1.SampleMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.domain.samplePkg.v1.SampleMsg.displayName = 'proto.domain.samplePkg.v1.SampleMsg';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.domain.samplePkg.v1.SampleMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.domain.samplePkg.v1.SampleMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.domain.samplePkg.v1.SampleMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplestring: jspb.Message.getFieldWithDefault(msg, 1, ""),
    samplebool: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sampleint: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.domain.samplePkg.v1.SampleMsg}
 */
proto.domain.samplePkg.v1.SampleMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.domain.samplePkg.v1.SampleMsg;
  return proto.domain.samplePkg.v1.SampleMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.domain.samplePkg.v1.SampleMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.domain.samplePkg.v1.SampleMsg}
 */
proto.domain.samplePkg.v1.SampleMsg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSamplestring(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSamplebool(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.domain.samplePkg.v1.SampleMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.domain.samplePkg.v1.SampleMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.domain.samplePkg.v1.SampleMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplestring();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSamplebool();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSampleint();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string SampleString = 1;
 * @return {string}
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.getSamplestring = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.domain.samplePkg.v1.SampleMsg} returns this
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.setSamplestring = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool SampleBool = 2;
 * @return {boolean}
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.getSamplebool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.domain.samplePkg.v1.SampleMsg} returns this
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.setSamplebool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 SampleInt = 3;
 * @return {number}
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.getSampleint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.domain.samplePkg.v1.SampleMsg} returns this
 */
proto.domain.samplePkg.v1.SampleMsg.prototype.setSampleint = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.domain.samplePkg.v1);
