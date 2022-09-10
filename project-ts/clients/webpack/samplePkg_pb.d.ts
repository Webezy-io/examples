import * as jspb from 'google-protobuf'



export class SampleMsg extends jspb.Message {
  getSamplestring(): string;
  setSamplestring(value: string): SampleMsg;

  getSamplebool(): boolean;
  setSamplebool(value: boolean): SampleMsg;

  getSampleint(): number;
  setSampleint(value: number): SampleMsg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampleMsg.AsObject;
  static toObject(includeInstance: boolean, msg: SampleMsg): SampleMsg.AsObject;
  static serializeBinaryToWriter(message: SampleMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampleMsg;
  static deserializeBinaryFromReader(message: SampleMsg, reader: jspb.BinaryReader): SampleMsg;
}

export namespace SampleMsg {
  export type AsObject = {
    samplestring: string,
    samplebool: boolean,
    sampleint: number,
  }
}

