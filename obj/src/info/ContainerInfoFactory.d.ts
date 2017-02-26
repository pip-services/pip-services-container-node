import { IFactory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class ContainerInfoFactory implements IFactory {
    static readonly Descriptor: Descriptor;
    static readonly ContainerInfoDescriptor: Descriptor;
    canCreate(locator: any): boolean;
    create(locator: any): any;
}
