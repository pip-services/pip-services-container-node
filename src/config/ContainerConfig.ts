import { ConfigParams } from 'pip-services-commons-node';

import { ComponentConfig } from './ComponentConfig';

export class ContainerConfig extends Array<ComponentConfig> {

    public constructor(components?: ComponentConfig[]) {
        super(...components);
    }

    public static fromObject(value: any): ContainerConfig {
        var config = ConfigParams.fromValue(value);
        return ContainerConfig.fromConfig(config);
    }

    public static fromConfig(config: ConfigParams): ContainerConfig {
        var result = new ContainerConfig();
        if (config == null) return result;

        var names = config.getSectionNames();
        for(var i = 0; i < names.length; i++) {
            var componentConfig = config.getSection(names[i]);
            result.push(ComponentConfig.fromConfig(componentConfig));
        }

        return result;
    }
		
}