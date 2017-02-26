import { ConfigParams } from 'pip-services-commons-node';
export declare class ContainerInfo {
    private _name;
    private _description;
    private _containerId;
    private _startTime;
    private _properties;
    name: string;
    description: string;
    containerId: string;
    startTime: Date;
    properties: any;
    static fromConfig(config: ConfigParams): ContainerInfo;
}
