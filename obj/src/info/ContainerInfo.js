"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
class ContainerInfo {
    constructor(name, description) {
        this._name = "unknown";
        this._description = null;
        this._containerId = pip_services_commons_node_1.IdGenerator.nextLong();
        this._startTime = new Date();
        this._properties = new pip_services_commons_node_2.StringValueMap();
        this._name = name || "unknown";
        this._description = description || null;
    }
    configure(config) {
        this.name = config.getAsStringWithDefault("name", this.name);
        this.name = config.getAsStringWithDefault("info.name", this.name);
        this.description = config.getAsStringWithDefault("description", this.description);
        this.description = config.getAsStringWithDefault("info.description", this.description);
        this.properties = config.getSection("properties");
    }
    get name() { return this._name; }
    set name(value) { this._name = value || "unknown"; }
    get description() { return this._description; }
    set description(value) { this._description = value; }
    get containerId() { return this._containerId; }
    set containerId(value) { this._containerId = value; }
    get startTime() { return this._startTime; }
    set startTime(value) { this._startTime = value || new Date(); }
    get uptime() {
        return new Date().getTime() - this._startTime.getTime();
    }
    get properties() { return this._properties; }
    set properties(properties) {
        this._properties = pip_services_commons_node_2.StringValueMap.fromValue(properties);
    }
    static fromConfig(config) {
        let result = new ContainerInfo();
        result.configure(config);
        return result;
    }
}
exports.ContainerInfo = ContainerInfo;
//# sourceMappingURL=ContainerInfo.js.map