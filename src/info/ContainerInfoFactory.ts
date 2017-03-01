import { Factory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

import { ContainerInfo } from './ContainerInfo';

export class ContainerInfoFactory extends Factory {
	public static readonly Descriptor: Descriptor = new Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
	public static readonly ContainerInfoDescriptor: Descriptor = new Descriptor("pip-services-container", "container-info", "default", "*", "1.0");
	
	public constructor() {
		super();
		this.registerAsType(ContainerInfoFactory.ContainerInfoDescriptor, ContainerInfo);
	}
}
