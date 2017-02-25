import { IFactory } from 'pip-services-commons-node';
import { IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class DummyFactory implements IFactory, IDescriptable {
    static Descriptor: Descriptor;
    static ControllerDescriptor: Descriptor;
    getDescriptor(): Descriptor;
    canCreate(locator: any): boolean;
    create(locator: any): any;
}
