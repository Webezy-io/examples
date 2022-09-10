/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as samplePkg_pb from './samplePkg_pb';


export class SampleServiceClient {
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

  methodDescriptorSampleRPC = new grpcWeb.MethodDescriptor(
    '/SampleService/SampleRPC',
    grpcWeb.MethodType.UNARY,
    samplePkg_pb.SampleMsg,
    samplePkg_pb.SampleMsg,
    (request: samplePkg_pb.SampleMsg) => {
      return request.serializeBinary();
    },
    samplePkg_pb.SampleMsg.deserializeBinary
  );

  sampleRPC(
    request: samplePkg_pb.SampleMsg,
    metadata: grpcWeb.Metadata | null): Promise<samplePkg_pb.SampleMsg>;

  sampleRPC(
    request: samplePkg_pb.SampleMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: samplePkg_pb.SampleMsg) => void): grpcWeb.ClientReadableStream<samplePkg_pb.SampleMsg>;

  sampleRPC(
    request: samplePkg_pb.SampleMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: samplePkg_pb.SampleMsg) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/SampleService/SampleRPC',
        request,
        metadata || {},
        this.methodDescriptorSampleRPC,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/SampleService/SampleRPC',
    request,
    metadata || {},
    this.methodDescriptorSampleRPC);
  }

}

