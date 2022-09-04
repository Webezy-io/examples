import { Metadata } from '@grpc/grpc-js';
import { MetadatumClient } from './generated/Metadatum';
import { TestMetadata } from './generated/metadata';
declare class projectmetadata {
    constructor(host?: string, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    readonly Metadatum_client: MetadatumClient;
    TestUnary(params: TestMetadata, metadata?: Metadata): Promise<TestMetadata>;
}
export declare const projectmetadataClient: projectmetadata;
export {};
