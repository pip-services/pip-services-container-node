import { IFactory } from 'pip-services-commons-node';
import { CompositeFactory } from 'pip-services-commons-node';
import { DefaultLoggerFactory } from 'pip-services-commons-node';
import { DefaultCountersFactory } from 'pip-services-commons-node';
import { DefaultConfigReaderFactory } from 'pip-services-commons-node';
import { DefaultCacheFactory } from 'pip-services-commons-node';
import { DefaultCredentialStoreFactory } from 'pip-services-commons-node';
import { DefaultDiscoveryFactory } from 'pip-services-commons-node';
import { DefaultInfoFactory } from 'pip-services-commons-node';
import { DefaultTestFactory } from '../test/DefaultTestFactory';
import { Descriptor } from 'pip-services-commons-node';

export class DefaultContainerFactory extends CompositeFactory {
    public static readonly Descriptor: Descriptor = new Descriptor("pip-services", "factory", "container", "default", "1.0");

    public constructor(...factories: IFactory[]) {
        super(...factories);

        this.add(new DefaultInfoFactory());
        this.add(new DefaultLoggerFactory());
        this.add(new DefaultCountersFactory());
        this.add(new DefaultConfigReaderFactory());
        this.add(new DefaultCacheFactory());
        this.add(new DefaultCredentialStoreFactory());
        this.add(new DefaultDiscoveryFactory());
        this.add(new DefaultTestFactory());
    }

}
