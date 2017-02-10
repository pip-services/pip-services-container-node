"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ComponentConfig_1 = require("./ComponentConfig");
class ContainerConfig extends Array {
    constructor(components) {
        super();
        if (components != null)
            super.push(...components);
    }
    static fromObject(value) {
        var config = pip_services_commons_node_1.ConfigParams.fromValue(value);
        return ContainerConfig.fromConfig(config);
    }
    static fromConfig(config) {
        var result = new ContainerConfig();
        if (config == null)
            return result;
        var names = config.getSectionNames();
        for (var i = 0; i < names.length; i++) {
            var componentConfig = config.getSection(names[i]);
            result.push(ComponentConfig_1.ComponentConfig.fromConfig(componentConfig));
        }
        return result;
    }
}
exports.ContainerConfig = ContainerConfig;
//# sourceMappingURL=ContainerConfig.js.map