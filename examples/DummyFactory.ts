import { 
    IFactory,
    IDescriptable
} from 'pip-services-commons-node';
import {
    CompositeFactory,
    DefaultLoggerFactory,
    DefaultCountersFactory,
    DefaultCacheFactory
} from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { DummyController } from './DummyController';

export class DummyFactory implements IFactory, IDescriptable {

	public static readonly descriptor: Descriptor = new Descriptor("pip-services-dummies", "factory", "default", "default", "1.0");

	public getDescriptor(): Descriptor { 
        return DummyFactory.descriptor; 
    }
	
    public canCreate(locator: any): boolean {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;

        if (descriptor == null) return false;

        if (descriptor.match(DummyController.descriptor))
            return true;

        return false;
    }

    public create(locator: any): any {
        if (locator == null)
            throw new Error("Locator cannot be null");

        let descriptor: Descriptor = <Descriptor>locator;

        if (descriptor == null) return null;

        if (descriptor.match(DummyController.descriptor))
            return new DummyController();

        return null;
    }

}
