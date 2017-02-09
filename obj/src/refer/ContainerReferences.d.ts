import { ManagedReferences } from 'pip-services-commons-node';
import { ContainerConfig } from '../config/ContainerConfig';
export declare class ContainerReferences extends ManagedReferences {
    private createStatically(locator);
    putFromConfig(config: ContainerConfig): void;
}
