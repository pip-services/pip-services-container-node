import { IFactory } from 'pip-services-commons-node';
import { IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { DummyController } from './DummyController';

export class DummyFactory implements IFactory, IDescriptable {
	public static Descriptor = new Descriptor("pip-services-dummies", "factory", "default", "default", "1.0");
	public static ControllerDescriptor = new Descriptor("pip-services-dummies", "controller", "default", "*", "1.0");

	public getDescriptor(): Descriptor {
		return DummyFactory.Descriptor;
	}
	
	public canCreate(locator: any): boolean {
		if (locator instanceof Descriptor) {			
			let descriptor = <Descriptor>locator;
			
			if (descriptor.match(DummyFactory.ControllerDescriptor))
				return true;
		}
		
		return false;
	}

	public create(locator: any): any {
		if (locator instanceof Descriptor) {
			let descriptor = <Descriptor>locator;
			
			if (descriptor.match(DummyFactory.ControllerDescriptor))
				return new DummyController();
		}
		
		return null;
	}
}

