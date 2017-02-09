import { Descriptor, TypeDescriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { ConfigException } from 'pip-services-commons-node';

export class ComponentConfig {

	private _descriptor: Descriptor;
	private _type: TypeDescriptor;
	private _config: ConfigParams;

    public constructor(descriptor: Descriptor, type: TypeDescriptor, config: ConfigParams) {
        this.descriptor = descriptor;
        this.type = type;
        this.config = config;
    }

	public get descriptor(): Descriptor { 
        return this._descriptor; 
    }
	public set descriptor(value: Descriptor) { 
        this._descriptor = value; 
    }

	public get type(): TypeDescriptor { 
        return this._type; 
    }
	public set type(value: TypeDescriptor) { 
        this._type = value; 
    }

	public get config(): ConfigParams { 
        return this._config; 
    }
	public set config(value: ConfigParams) { 
        this._config = value; 
    }

    public static fromConfig(config: ConfigParams): ComponentConfig {
        var descriptor = Descriptor.fromString(config.getAsNullableString("descriptor"));
        var type = TypeDescriptor.fromString(config.getAsNullableString("type"));

        if (descriptor == null && type == null)
            throw new ConfigException(null, "BAD_CONFIG", "Component configuration must have descriptor or type");

        return new ComponentConfig(descriptor, type, config);
    }
		
}