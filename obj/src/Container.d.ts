import { IOpenable } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { IReferenceable } from 'pip-services-commons-node';
import { IUnreferenceable } from 'pip-services-commons-node';
import { ILogger } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { IConfigurable } from 'pip-services-commons-node';
import { ContainerConfig } from './config/ContainerConfig';
import { ContainerInfo } from './info/ContainerInfo';
import { ContainerReferences } from './refer/ContainerReferences';
export declare class Container implements IConfigurable, IReferenceable, IUnreferenceable, IOpenable {
    protected _logger: ILogger;
    protected _info: ContainerInfo;
    protected _config: ContainerConfig;
    protected _references: ContainerReferences;
    constructor(config?: ContainerConfig);
    configure(config: ConfigParams): void;
    readConfigFromFile(correlationId: string, path: string, parameters: ConfigParams): void;
    setReferences(references: IReferences): void;
    unsetReferences(): void;
    initReferences(references: IReferences): void;
    isOpened(): boolean;
    open(correlationId: string, callback?: (err: any) => void): void;
    close(correlationId: string, callback?: (err: any) => void): void;
}
