"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
const ContainerConfig_1 = require("./ContainerConfig");
class ContainerConfigReader {
    static readFromFile(correlationId, path) {
        if (path == null)
            throw new pip_services_commons_node_3.ConfigException(correlationId, "NO_PATH", "Missing config file path");
        let ext = path.split('.').pop();
        if (ext == "json")
            return ContainerConfigReader.readFromJsonFile(correlationId, path);
        if (ext == "yaml")
            return ContainerConfigReader.readFromYamlFile(correlationId, path);
        // By default read as JSON
        return ContainerConfigReader.readFromJsonFile(correlationId, path);
    }
    static readFromJsonFile(correlationId, path) {
        let config = pip_services_commons_node_1.JsonConfigReader.readConfig(correlationId, path);
        return ContainerConfig_1.ContainerConfig.fromConfig(config);
    }
    static readFromYamlFile(correlationId, path) {
        let config = pip_services_commons_node_2.YamlConfigReader.readConfig(correlationId, path);
        return ContainerConfig_1.ContainerConfig.fromConfig(config);
    }
}
exports.ContainerConfigReader = ContainerConfigReader;
//# sourceMappingURL=ContainerConfigReader.js.map