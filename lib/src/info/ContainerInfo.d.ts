import { IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class ContainerInfo implements IDescriptable {
    private _descriptor;
    private _name;
    private _description;
    private _containerId;
    private _startTime;
    private _properties;
    ContainerInfo(): void;
    getDescriptor(): Descriptor;
    name: string;
    description: string;
    containerId: string;
    startTime: Date;
    properties: any;
    static fromConfig(config: any): ContainerInfo;
}
