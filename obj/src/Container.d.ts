import { IReferences } from 'pip-services-commons-node';
import { ILogger } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { ContainerConfig } from './config/ContainerConfig';
import { ContainerInfo } from './info/ContainerInfo';
import { ContainerReferences } from './refer/ContainerReferences';
export declare class Container {
    protected _logger: ILogger;
    protected _info: ContainerInfo;
    protected _config: ContainerConfig;
    protected _references: ContainerReferences;
    constructor(config?: ContainerConfig);
    getInfo(): ContainerInfo;
    setInfo(value: ContainerInfo): void;
    getConfig(): ContainerConfig;
    setConfig(value: ContainerConfig): void;
    getReferences(): ContainerReferences;
    setReferences(value: ContainerReferences): void;
    readConfigFromFile(correlationId: string, path: string, parameters: ConfigParams): void;
    protected initReferences(references: IReferences): void;
    start(correlationId: string, callback?: (err: any) => void): void;
    stop(correlationId: string, callback?: (err: any) => void): void;
}
