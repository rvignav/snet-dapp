// package: example_service
// file: example_service.proto

/*eslint-disable */

var centivize_pb = require("./centivize_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Centivize = (function () {
  function Centivize() {}
  Centivize.serviceName = "centivize.Centivize";
  return Centivize;
}());

Centivize.summarize = {
  methodName: "summarize",
  service: Centivize,
  requestStream: false,
  responseStream: false,
  requestType: centivize_pb.Paragraph,
  responseType: centivize_pb.Summary
};

Centivize.similarity = {
  methodName: "similarity",
  service: Centivize,
  requestStream: false,
  responseStream: false,
  requestType: centivize_pb.Paragraphs,
  responseType: centivize_pb.Similarity
};

exports.Centivize = Centivize;

function CentivizeClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CentivizeClient.prototype.summarize = function summarize(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Centivize.summarize, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CentivizeClient.prototype.similarity = function similarity(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Centivize.similarity, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CentivizeClient = CentivizeClient;

