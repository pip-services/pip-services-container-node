import { Descriptor, TypeDescriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
export declare class ComponentConfig {
    private _descriptor;
    private _type;
    private _config;
    constructor(descriptor?: Descriptor, type?: TypeDescriptor, config?: ConfigParams);
    descriptor: Descriptor;
    type: TypeDescriptor;
    config: ConfigParams;
    static fromConfig(config: ConfigParams): ComponentConfig;
}
