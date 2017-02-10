import { IReferences, ILogger } from 'pip-services-commons-node';
import { ContainerConfig } from './config/ContainerConfig';
import { ContainerInfo } from './info/ContainerInfo';
import { ContainerReferences } from './refer/ContainerReferences';
export declare class Container {
    protected _logger: ILogger;
    private _info;
    private _config;
    private _references;
    constructor(config?: ContainerConfig);
    info: ContainerInfo;
    config: ContainerConfig;
    references: ContainerReferences;
    readConfigFromFile(correlationId: string, path: string): void;
    protected initReferences(references: IReferences): void;
    start(correlationId: string, callback: (err?: any) => void): void;
    stop(correlationId: string, callback?: (err?: any) => void): void;
}
