import { 
    JsonConfigReader,
    YamlConfigReader,
    ConfigException
} from 'pip-services-commons-node';

import { ContainerConfig } from './ContainerConfig';

export class ContainerConfigReader {

    public static readFromFile(correlationId: string, path: string): ContainerConfig {
        if (path == null)
            throw new ConfigException(correlationId, "NO_PATH", "Missing config file path");

        var ext = path.split('.').pop();

        if (ext === "json")
            return ContainerConfigReader.readFromJsonFile(correlationId, path);

        if (ext === "yaml")
            return ContainerConfigReader.readFromYamlFile(correlationId, path);

        // By default read as JSON
        return ContainerConfigReader.readFromJsonFile(correlationId, path);
    }

    public static readFromJsonFile(correlationId: string, path: string): ContainerConfig {
        var config = JsonConfigReader.readConfig(correlationId, path);
        return ContainerConfig.fromConfig(config);
    }

    public static readFromYamlFile(correlationId: string, path: string): ContainerConfig {
        var config = YamlConfigReader.readConfig(correlationId, path);
        return ContainerConfig.fromConfig(config);
    }
		
}