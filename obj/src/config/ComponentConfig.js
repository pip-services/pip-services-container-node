"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
class ComponentConfig {
    constructor(descriptor, type, config) {
        this.descriptor = descriptor;
        this.type = type;
        this.config = config;
    }
    get descriptor() {
        return this._descriptor;
    }
    set descriptor(value) {
        this._descriptor = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    fromConfig(config) {
        var descriptor = pip_services_commons_node_1.Descriptor.fromString(config.getAsNullableString("descriptor"));
        var type = pip_services_commons_node_1.TypeDescriptor.fromString(config.getAsNullableString("type"));
        if (descriptor == null && type == null)
            throw new pip_services_commons_node_2.ConfigException(null, "BAD_CONFIG", "Component configuration must have descriptor or type");
        return new ComponentConfig(descriptor, type, config);
    }
}
exports.ComponentConfig = ComponentConfig;
//# sourceMappingURL=ComponentConfig.js.map