import { IFactory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class DummyFactory implements IFactory {
    static Descriptor: Descriptor;
    static ControllerDescriptor: Descriptor;
    canCreate(locator: any): boolean;
    create(locator: any): any;
}
