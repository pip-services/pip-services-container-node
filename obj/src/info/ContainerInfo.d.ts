import { IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
export declare class ContainerInfo implements IDescriptable {
    static readonly descriptor: Descriptor;
    private _name;
    private _description;
    private _containerId;
    private _startTime;
    private _properties;
    getDescriptor(): Descriptor;
    name: string;
    description: string;
    containerId: string;
    startTime: Date;
    properties: any;
    static fromConfig(config: ConfigParams): ContainerInfo;
}
