import { IFactory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

import { ContainerInfo } from './ContainerInfo';

export class ContainerInfoFactory implements IFactory {
	public static readonly Descriptor: Descriptor = new Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
	public static readonly ContainerInfoDescriptor: Descriptor = new Descriptor("pip-services-container", "container-info", "default", "*", "1.0");
	
    public canCreate(locator: any): boolean {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;
        if (descriptor != null) {

            if (descriptor.match(ContainerInfoFactory.ContainerInfoDescriptor))
                return true;

        }

        return false;
    }

    public create(locator: any): any {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;
        if (descriptor != null) {

            if (descriptor.match(ContainerInfoFactory.ContainerInfoDescriptor))
                return new ContainerInfo();
        }

        return null;
    }
}
