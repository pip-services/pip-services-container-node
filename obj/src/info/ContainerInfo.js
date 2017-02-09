"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
class ContainerInfo {
    constructor() {
        this._name = "unknown";
        this._description = null;
        this._containerId = pip_services_commons_node_2.IdGenerator.nextLong();
        this._startTime = new Date();
        this._properties = new pip_services_commons_node_3.StringValueMap();
    }
    getDescriptor() {
        return ContainerInfo.descriptor;
    }
    get name() { return this._name; }
    set name(value) {
        this._name = value || "unknown";
    }
    get description() { return this._description; }
    set description(value) { this._description = value; }
    get containerId() { return this._containerId; }
    set containerId(value) { this._containerId = value; }
    get startTime() { return this._startTime; }
    set startTime(value) {
        this._startTime = value || new Date();
    }
    get properties() { return this._properties; }
    set properties(properties) {
        this._properties = properties || new pip_services_commons_node_3.StringValueMap();
    }
    static fromConfig(config) {
        let result = new ContainerInfo();
        let info = config.getSection("info");
        result.name = info.getAsNullableString("name");
        result.description = info.getAsNullableString("description");
        result.properties = config.getSection("properties");
        return result;
    }
}
ContainerInfo.descriptor = new pip_services_commons_node_1.Descriptor("pip-services-container", "container-info", "default", "default", "1.0");
exports.ContainerInfo = ContainerInfo;
//# sourceMappingURL=ContainerInfo.js.map