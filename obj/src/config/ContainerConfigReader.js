"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ContainerConfig_1 = require("./ContainerConfig");
class ContainerConfigReader {
    static readFromFile(correlationId, path) {
        if (path == null)
            throw new pip_services_commons_node_1.ConfigException(correlationId, "NO_PATH", "Missing config file path");
        var ext = path.split('.').pop();
        if (ext === "json")
            return ContainerConfigReader.readFromJsonFile(correlationId, path);
        if (ext === "yaml")
            return ContainerConfigReader.readFromYamlFile(correlationId, path);
        // By default read as JSON
        return ContainerConfigReader.readFromJsonFile(correlationId, path);
    }
    static readFromJsonFile(correlationId, path) {
        var config = pip_services_commons_node_1.JsonConfigReader.readConfig(correlationId, path);
        return ContainerConfig_1.ContainerConfig.fromConfig(config);
    }
    static readFromYamlFile(correlationId, path) {
        var config = pip_services_commons_node_1.YamlConfigReader.readConfig(correlationId, path);
        return ContainerConfig_1.ContainerConfig.fromConfig(config);
    }
}
exports.ContainerConfigReader = ContainerConfigReader;
//# sourceMappingURL=ContainerConfigReader.js.map