import * as jspb from 'google-protobuf'



export class HealthCheckRequest extends jspb.Message {
  getService(): string;
  setService(value: string): HealthCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
  static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
  static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace TestHealthCheckRequest {
  export type AsObject = {
    service: string,
  }
}

export class HealthCheckResponse extends jspb.Message {
  getStatus(): ServingStatus;
  setStatus(value: ServingStatus): HealthCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
  static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
  static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace TestHealthCheckResponse {
  export type AsObject = {
    status: ServingStatus,
  }
}

export class SetHealthRequest extends jspb.Message {
  getService(): string;
  setService(value: string): SetHealthRequest;

  getStatus(): ServingStatus;
  setStatus(value: ServingStatus): SetHealthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetHealthRequest): SetHealthRequest.AsObject;
  static serializeBinaryToWriter(message: SetHealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHealthRequest;
  static deserializeBinaryFromReader(message: SetHealthRequest, reader: jspb.BinaryReader): SetHealthRequest;
}

export namespace TestSetHealthRequest {
  export type AsObject = {
    service: string,
    status: ServingStatus,
  }
}

export class SetHealthResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): SetHealthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetHealthResponse): SetHealthResponse.AsObject;
  static serializeBinaryToWriter(message: SetHealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHealthResponse;
  static deserializeBinaryFromReader(message: SetHealthResponse, reader: jspb.BinaryReader): SetHealthResponse;
}

export namespace TestSetHealthResponse {
  export type AsObject = {
    status: string,
  }
}

export enum ServingStatus { 
  UNKNOWN = 0,
  SERVING = 1,
  NOT_SERVING = 2,
  NOT_FOUND = 3,
}
