import { ConfigParams } from 'pip-services-commons-node';
import { IReconfigurable } from 'pip-services-commons-node';
export declare class ContainerInfo implements IReconfigurable {
    private _name;
    private _description;
    private _containerId;
    private _startTime;
    private _properties;
    constructor();
    configure(config: ConfigParams): void;
    name: string;
    description: string;
    containerId: string;
    startTime: Date;
    readonly uptime: number;
    properties: any;
    static fromConfig(config: ConfigParams): ContainerInfo;
}
