"use strict";
var pip_services_commons_node_1 = require("pip-services-commons-node");
var pip_services_commons_node_2 = require("pip-services-commons-node");
var pip_services_commons_node_3 = require("pip-services-commons-node");
var ContainerInfo = (function () {
    function ContainerInfo() {
        this._descriptor = new pip_services_commons_node_1.Descriptor("pip-services-container", "container-info", "default", "default", "1.0");
        this._name = "unknown";
        this._description = null;
        this._containerId = pip_services_commons_node_2.IdGenerator.nextLong();
        this._startTime = new Date();
        this._properties = new pip_services_commons_node_3.StringValueMap();
    }
    ContainerInfo.prototype.ContainerInfo = function () { };
    ContainerInfo.prototype.getDescriptor = function () {
        return this._descriptor;
    };
    Object.defineProperty(ContainerInfo.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) {
            this._name = value || "unknown";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerInfo.prototype, "description", {
        get: function () { return this._description; },
        set: function (value) { this._description = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerInfo.prototype, "containerId", {
        get: function () { return this._containerId; },
        set: function (value) { this._containerId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerInfo.prototype, "startTime", {
        get: function () { return this._startTime; },
        set: function (value) {
            this._startTime = value || new Date();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContainerInfo.prototype, "properties", {
        get: function () { return this._properties; },
        set: function (properties) {
            this._properties = properties || new pip_services_commons_node_3.StringValueMap();
        },
        enumerable: true,
        configurable: true
    });
    ContainerInfo.fromConfig = function (config) {
        var result = new ContainerInfo();
        var info = config.getSection("info");
        result.name = info.getAsNullableString("name");
        result.description = info.getAsNullableString("description");
        var properties = config.getSection("properties");
        result.properties = properties;
        return result;
    };
    return ContainerInfo;
}());
exports.ContainerInfo = ContainerInfo;
//# sourceMappingURL=ContainerInfo.js.map