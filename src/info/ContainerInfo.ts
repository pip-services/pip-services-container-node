import { IdGenerator } from 'pip-services-commons-node';
import { StringValueMap } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { IReconfigurable } from 'pip-services-commons-node';

export class ContainerInfo implements IReconfigurable {	
	private _name: string = "unknown";
	private _description: string = null;
	private _containerId: string = IdGenerator.nextLong();
	private _startTime: Date = new Date();
	private _properties: StringValueMap = new StringValueMap();

	public constructor() {}

	public configure(config: ConfigParams): void {
		this.name = config.getAsStringWithDefault("name", this.name);
		this.name = config.getAsStringWithDefault("info.name", this.name);

		this.description = config.getAsStringWithDefault("description", this.description);
		this.description = config.getAsStringWithDefault("info.description", this.description);
		
		this.properties = config.getSection("properties");
	}
	
	public get name(): string { return this._name; }
	public set name(value: string) { this._name = value || "unknown"; }
	
	public get description(): string { return this._description; }
	public set description(value: string) { this._description = value; }
	
	public get containerId(): string { return this._containerId; }
	public set containerId(value: string) { this._containerId = value; }
	
	public get startTime(): Date { return this._startTime; }
	public set startTime(value: Date) { this._startTime = value || new Date(); }
	
	public get uptime(): number {
		return new Date().getTime() - this._startTime.getTime();
	}

	public get properties(): any { return this._properties; }
	public set properties(properties: any) {
		this._properties = StringValueMap.fromValue(properties);
	}
	
	public static fromConfig(config: ConfigParams): ContainerInfo {
		let result = new ContainerInfo();
		result.configure(config);
		return result;
	}
}
