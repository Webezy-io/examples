/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as pubsub_pb from './pubsub_pb';


export class PubsubServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPublish = new grpcWeb.MethodDescriptor(
    '/PubsubService/Publish',
    grpcWeb.MethodType.UNARY,
    pubsub_pb.PublishRequest,
    pubsub_pb.PublishResponse,
    (request: pubsub_pb.PublishRequest) => {
      return request.serializeBinary();
    },
    pubsub_pb.PublishResponse.deserializeBinary
  );

  publish(
    request: pubsub_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null): Promise<pubsub_pb.PublishResponse>;

  publish(
    request: pubsub_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: pubsub_pb.PublishResponse) => void): grpcWeb.ClientReadableStream<pubsub_pb.PublishResponse>;

  publish(
    request: pubsub_pb.PublishRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: pubsub_pb.PublishResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/PubsubService/Publish',
        request,
        metadata || {},
        this.methodDescriptorPublish,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/PubsubService/Publish',
    request,
    metadata || {},
    this.methodDescriptorPublish);
  }

  methodDescriptorSubscribe = new grpcWeb.MethodDescriptor(
    '/PubsubService/Subscribe',
    grpcWeb.MethodType.SERVER_STREAMING,
    pubsub_pb.SubscribeRequest,
    pubsub_pb.SubscribeResponse,
    (request: pubsub_pb.SubscribeRequest) => {
      return request.serializeBinary();
    },
    pubsub_pb.SubscribeResponse.deserializeBinary
  );

  subscribe(
    request: pubsub_pb.SubscribeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<pubsub_pb.SubscribeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/PubsubService/Subscribe',
      request,
      metadata || {},
      this.methodDescriptorSubscribe);
  }

}

