import _m0 from "protobufjs/minimal";
export interface SampleMsg {
    SampleString: string;
    SampleBool: boolean;
    SampleInt: number;
}
export declare const SampleMsg: {
    encode(message: SampleMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SampleMsg;
    fromJSON(object: any): SampleMsg;
    toJSON(message: SampleMsg): unknown;
    fromPartial<I extends {
        SampleString?: string | undefined;
        SampleBool?: boolean | undefined;
        SampleInt?: number | undefined;
    } & {
        SampleString?: string | undefined;
        SampleBool?: boolean | undefined;
        SampleInt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SampleMsg>]: never; }>(object: I): SampleMsg;
};
