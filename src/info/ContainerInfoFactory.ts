import { IFactory, IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

import { ContainerInfo } from './ContainerInfo';

export class ContainerInfoFactory implements IFactory, IDescriptable {
	public static readonly descriptor: Descriptor = new Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
	
	public getDescriptor(): Descriptor { 
        return ContainerInfoFactory.descriptor; 
    }
	
    public canCreate(locator: any): boolean {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;

        if (descriptor == null) return false;

        if (descriptor.match(ContainerInfo.descriptor))
            return true;

        return false;
    }

    public create(locator: any): any {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;

        if (descriptor == null) return null;

        if (descriptor.match(ContainerInfo.descriptor))
            return new ContainerInfo();

        return null;
    }
}
