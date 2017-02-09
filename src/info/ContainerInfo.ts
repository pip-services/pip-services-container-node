import { IDescriptable } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';

export class ContainerInfo implements IDescriptable {
	public static readonly descriptor: Descriptor = new Descriptor("pip-services-container", "container-info", "default", "default", "1.0");
	
	private _name: string = "unknown";
	private _description: string = null;
	private _containerId: string = IdGenerator.nextLong();
	private _startTime: Date = new Date();
	private _properties: StringValueMap = new StringValueMap();
	
	public getDescriptor(): Descriptor { 
        return ContainerInfo.descriptor; 
    }
	
	public get name(): string { return this._name; }
	public set name(value: string) { 
		this._name = value || "unknown"; 
	}
	
	public get description(): string { return this._description; }
	public set description(value: string) { this._description = value; }
	
	public get containerId(): string { return this._containerId; }
	public set containerId(value: string) { this._containerId = value; }
	
	public get startTime(): Date { return this._startTime; }
	public set  startTime(value: Date) { 
		this._startTime = value || new Date(); 
	}
	
	public get properties(): any { return this._properties; }
	public set properties(properties: any) {
		this._properties = properties || new StringValueMap();
	}
	
	public static fromConfig(config: ConfigParams): ContainerInfo {
		let result = new ContainerInfo();
		
		let info = config.getSection("info");
		result.name = info.getAsNullableString("name");
		result.description = info.getAsNullableString("description");
		
		result.properties = config.getSection("properties");
				
		return result;
	}
}
