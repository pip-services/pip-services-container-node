import { ConfigParams } from 'pip-services-commons-node';
import { IConfigurable } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { IReferenceable } from 'pip-services-commons-node';
import { DependencyResolver } from 'pip-services-commons-node';
import { CompositeLogger } from 'pip-services-commons-node';
import { CompositeCounters } from 'pip-services-commons-node';
export declare class Component implements IConfigurable, IReferenceable {
    protected _dependencyResolver: DependencyResolver;
    protected _logger: CompositeLogger;
    protected _counters: CompositeCounters;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
}
