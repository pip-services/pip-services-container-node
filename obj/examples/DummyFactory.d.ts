import { IFactory, IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class DummyFactory implements IFactory, IDescriptable {
    static readonly descriptor: Descriptor;
    getDescriptor(): Descriptor;
    canCreate(locator: any): boolean;
    create(locator: any): any;
}
