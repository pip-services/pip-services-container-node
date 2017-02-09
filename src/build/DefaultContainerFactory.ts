import { IFactory, IDescriptable } from 'pip-services-commons-node';
import { CompositeFactory, DefaultLoggerFactory, DefaultCountersFactory, DefaultCacheFactory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

import { ContainerInfoFactory } from '../info/ContainerInfoFactory';

export class DefaultContainerFactory extends CompositeFactory implements IDescriptable {
	public static readonly descriptor: Descriptor = new Descriptor("pip-services-container", "factory", "container", "default", "1.0");
	
    public constructor(...factories: IFactory[]) {
        super(...factories);

        this.add(new ContainerInfoFactory());
        this.add(new DefaultLoggerFactory());
        this.add(new DefaultCountersFactory());
        this.add(new DefaultCacheFactory());
    }

	public getDescriptor(): Descriptor { 
        return DefaultContainerFactory.descriptor; 
    }

}
