/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_emotion_recognition_service.BoundingBox', null, global);
goog.exportSymbol('snet_emotion_recognition_service.Face', null, global);
goog.exportSymbol('snet_emotion_recognition_service.RecognizeRequest', null, global);
goog.exportSymbol('snet_emotion_recognition_service.RecognizeResponse', null, global);

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
snet_emotion_recognition_service.BoundingBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_emotion_recognition_service.BoundingBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_emotion_recognition_service.BoundingBox.displayName = 'snet_emotion_recognition_service.BoundingBox';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_emotion_recognition_service.BoundingBox.prototype.toObject = function(opt_includeInstance) {
  return snet_emotion_recognition_service.BoundingBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_emotion_recognition_service.BoundingBox} msg The msg instance to transform.
 * @return {!Object}
 */
snet_emotion_recognition_service.BoundingBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: msg.getX(),
    y: msg.getY(),
    w: msg.getW(),
    h: msg.getH()
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
 * @return {!snet_emotion_recognition_service.BoundingBox}
 */
snet_emotion_recognition_service.BoundingBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_emotion_recognition_service.BoundingBox;
  return snet_emotion_recognition_service.BoundingBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_emotion_recognition_service.BoundingBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_emotion_recognition_service.BoundingBox}
 */
snet_emotion_recognition_service.BoundingBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setW(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setH(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_emotion_recognition_service.BoundingBox} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.BoundingBox.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_emotion_recognition_service.BoundingBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.BoundingBox.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getW();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getH();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_emotion_recognition_service.BoundingBox} The clone.
 */
snet_emotion_recognition_service.BoundingBox.prototype.cloneMessage = function() {
  return /** @type {!snet_emotion_recognition_service.BoundingBox} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
snet_emotion_recognition_service.BoundingBox.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
snet_emotion_recognition_service.BoundingBox.prototype.setX = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
snet_emotion_recognition_service.BoundingBox.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
snet_emotion_recognition_service.BoundingBox.prototype.setY = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 w = 3;
 * @return {number}
 */
snet_emotion_recognition_service.BoundingBox.prototype.getW = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
snet_emotion_recognition_service.BoundingBox.prototype.setW = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 h = 4;
 * @return {number}
 */
snet_emotion_recognition_service.BoundingBox.prototype.getH = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
snet_emotion_recognition_service.BoundingBox.prototype.setH = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
snet_emotion_recognition_service.Face = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_emotion_recognition_service.Face, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_emotion_recognition_service.Face.displayName = 'snet_emotion_recognition_service.Face';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_emotion_recognition_service.Face.prototype.toObject = function(opt_includeInstance) {
  return snet_emotion_recognition_service.Face.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_emotion_recognition_service.Face} msg The msg instance to transform.
 * @return {!Object}
 */
snet_emotion_recognition_service.Face.toObject = function(includeInstance, msg) {
  var f, obj = {
    emotion: msg.getEmotion(),
    boundingBox: (f = msg.getBoundingBox()) && snet_emotion_recognition_service.BoundingBox.toObject(includeInstance, f)
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
 * @return {!snet_emotion_recognition_service.Face}
 */
snet_emotion_recognition_service.Face.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_emotion_recognition_service.Face;
  return snet_emotion_recognition_service.Face.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_emotion_recognition_service.Face} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_emotion_recognition_service.Face}
 */
snet_emotion_recognition_service.Face.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmotion(value);
      break;
    case 2:
      var value = new snet_emotion_recognition_service.BoundingBox;
      reader.readMessage(value,snet_emotion_recognition_service.BoundingBox.deserializeBinaryFromReader);
      msg.setBoundingBox(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_emotion_recognition_service.Face} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.Face.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_emotion_recognition_service.Face.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.Face.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEmotion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getBoundingBox();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      snet_emotion_recognition_service.BoundingBox.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_emotion_recognition_service.Face} The clone.
 */
snet_emotion_recognition_service.Face.prototype.cloneMessage = function() {
  return /** @type {!snet_emotion_recognition_service.Face} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string emotion = 1;
 * @return {string}
 */
snet_emotion_recognition_service.Face.prototype.getEmotion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_emotion_recognition_service.Face.prototype.setEmotion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional BoundingBox bounding_box = 2;
 * @return {snet_emotion_recognition_service.BoundingBox}
 */
snet_emotion_recognition_service.Face.prototype.getBoundingBox = function() {
  return /** @type{snet_emotion_recognition_service.BoundingBox} */ (
    jspb.Message.getWrapperField(this, snet_emotion_recognition_service.BoundingBox, 2));
};


/** @param {snet_emotion_recognition_service.BoundingBox|undefined} value  */
snet_emotion_recognition_service.Face.prototype.setBoundingBox = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


snet_emotion_recognition_service.Face.prototype.clearBoundingBox = function() {
  this.setBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
snet_emotion_recognition_service.Face.prototype.hasBoundingBox = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
snet_emotion_recognition_service.RecognizeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_emotion_recognition_service.RecognizeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_emotion_recognition_service.RecognizeRequest.displayName = 'snet_emotion_recognition_service.RecognizeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.toObject = function(opt_includeInstance) {
  return snet_emotion_recognition_service.RecognizeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_emotion_recognition_service.RecognizeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
snet_emotion_recognition_service.RecognizeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageType: msg.getImageType(),
    image: msg.getImage()
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
 * @return {!snet_emotion_recognition_service.RecognizeRequest}
 */
snet_emotion_recognition_service.RecognizeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_emotion_recognition_service.RecognizeRequest;
  return snet_emotion_recognition_service.RecognizeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_emotion_recognition_service.RecognizeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_emotion_recognition_service.RecognizeRequest}
 */
snet_emotion_recognition_service.RecognizeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_emotion_recognition_service.RecognizeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.RecognizeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getImageType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getImage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_emotion_recognition_service.RecognizeRequest} The clone.
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.cloneMessage = function() {
  return /** @type {!snet_emotion_recognition_service.RecognizeRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string image_type = 1;
 * @return {string}
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.getImageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_emotion_recognition_service.RecognizeRequest.prototype.setImageType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string image = 2;
 * @return {string}
 */
snet_emotion_recognition_service.RecognizeRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_emotion_recognition_service.RecognizeRequest.prototype.setImage = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
snet_emotion_recognition_service.RecognizeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, snet_emotion_recognition_service.RecognizeResponse.repeatedFields_, null);
};
goog.inherits(snet_emotion_recognition_service.RecognizeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_emotion_recognition_service.RecognizeResponse.displayName = 'snet_emotion_recognition_service.RecognizeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
snet_emotion_recognition_service.RecognizeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_emotion_recognition_service.RecognizeResponse.prototype.toObject = function(opt_includeInstance) {
  return snet_emotion_recognition_service.RecognizeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_emotion_recognition_service.RecognizeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
snet_emotion_recognition_service.RecognizeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    facesList: jspb.Message.toObjectList(msg.getFacesList(),
    snet_emotion_recognition_service.Face.toObject, includeInstance)
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
 * @return {!snet_emotion_recognition_service.RecognizeResponse}
 */
snet_emotion_recognition_service.RecognizeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_emotion_recognition_service.RecognizeResponse;
  return snet_emotion_recognition_service.RecognizeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_emotion_recognition_service.RecognizeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_emotion_recognition_service.RecognizeResponse}
 */
snet_emotion_recognition_service.RecognizeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new snet_emotion_recognition_service.Face;
      reader.readMessage(value,snet_emotion_recognition_service.Face.deserializeBinaryFromReader);
      msg.getFacesList().push(value);
      msg.setFacesList(msg.getFacesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_emotion_recognition_service.RecognizeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.RecognizeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_emotion_recognition_service.RecognizeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_emotion_recognition_service.RecognizeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFacesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      snet_emotion_recognition_service.Face.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_emotion_recognition_service.RecognizeResponse} The clone.
 */
snet_emotion_recognition_service.RecognizeResponse.prototype.cloneMessage = function() {
  return /** @type {!snet_emotion_recognition_service.RecognizeResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Face faces = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!snet_emotion_recognition_service.Face>}
 */
snet_emotion_recognition_service.RecognizeResponse.prototype.getFacesList = function() {
  return /** @type{!Array.<!snet_emotion_recognition_service.Face>} */ (
    jspb.Message.getRepeatedWrapperField(this, snet_emotion_recognition_service.Face, 1));
};


/** @param {Array.<!snet_emotion_recognition_service.Face>} value  */
snet_emotion_recognition_service.RecognizeResponse.prototype.setFacesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


snet_emotion_recognition_service.RecognizeResponse.prototype.clearFacesList = function() {
  this.setFacesList([]);
};


goog.object.extend(exports, snet_emotion_recognition_service);