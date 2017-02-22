"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const DefaultContainerFactory_1 = require("./build/DefaultContainerFactory");
const ContainerConfigReader_1 = require("./config/ContainerConfigReader");
const ContainerInfo_1 = require("./info/ContainerInfo");
const ContainerReferences_1 = require("./refer/ContainerReferences");
class Container {
    constructor(config) {
        this._logger = new pip_services_commons_node_1.NullLogger();
        this._info = new ContainerInfo_1.ContainerInfo();
        this._references = new ContainerReferences_1.ContainerReferences();
        this.config = config;
    }
    get info() {
        return this._info;
    }
    set info(value) {
        this._info = value;
    }
    get config() {
        return this._config;
    }
    set config(value) {
        this._config = value;
    }
    get references() {
        return this._references;
    }
    set references(value) {
        this._references = value;
    }
    readConfigFromFile(correlationId, path) {
        this.config = ContainerConfigReader_1.ContainerConfigReader.readFromFile(correlationId, path);
    }
    initReferences(references) {
        references.put(new DefaultContainerFactory_1.DefaultContainerFactory());
    }
    start(correlationId, callback) {
        if (this.references == null) {
            var err = new pip_services_commons_node_1.InvalidStateException(correlationId, "NO_CONFIG", "Container was not configured");
            if (callback)
                callback(err);
            else
                throw err;
        }
        try {
            this._logger.trace(correlationId, "Starting container.");
            // Create references with configured components
            this.initReferences(this.references);
            this.references.putFromConfig(this.config);
            // Reference and open components
            let components = this.references.getAll();
            pip_services_commons_node_1.Referencer.setReferences(this.references, components);
            pip_services_commons_node_1.Opener.open(correlationId, components, (err) => {
                // Get reference to logger
                this._logger = new pip_services_commons_node_1.CompositeLogger(this.references);
                // Get reference to container info
                var infoDescriptor = new pip_services_commons_node_1.Descriptor("*", "container-info", "*", "*", "*");
                this.info = this.references.getOneRequired(infoDescriptor);
                this._logger.info(correlationId, "Container {0} started.", this.info.name);
            });
        }
        catch (ex) {
            this.references = null;
            this._logger.error(correlationId, ex, "Failed to start container");
            throw ex;
        }
    }
    stop(correlationId, callback) {
        if (this.references == null) {
            var err = new pip_services_commons_node_1.InvalidStateException(correlationId, "NO_STARTED", "Container was not started");
            if (callback)
                callback(err);
            else
                throw err;
        }
        try {
            this._logger.trace(correlationId, "Stopping {0} container", this.info.name);
            // Close and deference components
            this.references.close(correlationId, (err) => {
                this._logger.info(correlationId, "Container {0} stopped", this.info.name);
                if (callback)
                    callback();
            });
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Failed to stop container");
            throw ex;
        }
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map