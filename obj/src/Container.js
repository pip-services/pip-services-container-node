"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
const pip_services_commons_node_4 = require("pip-services-commons-node");
const pip_services_commons_node_5 = require("pip-services-commons-node");
const pip_services_commons_node_6 = require("pip-services-commons-node");
const DefaultContainerFactory_1 = require("./build/DefaultContainerFactory");
const ContainerConfigReader_1 = require("./config/ContainerConfigReader");
const ContainerInfo_1 = require("./info/ContainerInfo");
const ContainerReferences_1 = require("./refer/ContainerReferences");
class Container {
    constructor(config) {
        this._logger = new pip_services_commons_node_4.NullLogger();
        this._info = new ContainerInfo_1.ContainerInfo();
        this._references = new ContainerReferences_1.ContainerReferences();
        this._config = config;
    }
    getInfo() {
        return this._info;
    }
    setInfo(value) {
        this._info = value;
    }
    getConfig() {
        return this._config;
    }
    setConfig(value) {
        this._config = value;
    }
    getReferences() {
        return this._references;
    }
    setReferences(value) {
        this._references = value;
    }
    readConfigFromFile(correlationId, path, parameters) {
        this._config = ContainerConfigReader_1.ContainerConfigReader.readFromFile(correlationId, path, parameters);
    }
    initReferences(references) {
        references.put(DefaultContainerFactory_1.DefaultContainerFactory.Descriptor, new DefaultContainerFactory_1.DefaultContainerFactory());
    }
    start(correlationId, callback) {
        if (this._references == null) {
            var err = new pip_services_commons_node_6.InvalidStateException(correlationId, "NO_CONFIG", "Container was not configured");
            if (callback)
                callback(err);
            else
                throw err;
            return;
        }
        try {
            this._logger.trace(correlationId, "Starting container.");
            // Create references with configured components
            this.initReferences(this._references);
            this._references.putFromConfig(this._config);
            // Reference and open components
            let components = this._references.getAll();
            pip_services_commons_node_2.Referencer.setReferences(this._references, components);
            pip_services_commons_node_3.Opener.open(correlationId, components, (err) => {
                // Get reference to logger
                this._logger = new pip_services_commons_node_5.CompositeLogger(this._references);
                // Get reference to container info
                var infoDescriptor = new pip_services_commons_node_1.Descriptor("*", "container-info", "*", "*", "*");
                this._info = this._references.getOneRequired(infoDescriptor);
                this._logger.info(correlationId, "Container %s started.", this._info.name);
                if (callback)
                    callback(null);
            });
        }
        catch (ex) {
            this._references = null;
            this._logger.error(correlationId, ex, "Failed to start container");
            if (callback)
                callback(ex);
            else
                throw ex;
        }
    }
    stop(correlationId, callback) {
        if (this._references == null) {
            var err = new pip_services_commons_node_6.InvalidStateException(correlationId, "NO_STARTED", "Container was not started");
            if (callback)
                callback(err);
            else
                throw err;
            return;
        }
        try {
            this._logger.trace(correlationId, "Stopping %s container", this._info.name);
            // Close and deference components
            this._references.close(correlationId, (err) => {
                this._logger.info(correlationId, "Container %s stopped", this._info.name);
                if (callback)
                    callback(null);
            });
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Failed to stop container");
            if (callback)
                callback(ex);
            else
                throw ex;
        }
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map