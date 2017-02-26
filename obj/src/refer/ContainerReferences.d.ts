import { ContainerConfig } from '../config/ContainerConfig';
import { ManagedReferences } from './ManagedReferences';
export declare class ContainerReferences extends ManagedReferences {
    private createStatically(locator);
    putFromConfig(config: ContainerConfig): void;
}
