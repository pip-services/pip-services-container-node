import { IFactory, IDescriptable } from 'pip-services-commons-node';
import { CompositeFactory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class DefaultContainerFactory extends CompositeFactory implements IDescriptable {
    static readonly descriptor: Descriptor;
    constructor(...factories: IFactory[]);
    getDescriptor(): Descriptor;
}
