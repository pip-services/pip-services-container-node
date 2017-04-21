"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
class Component {
    constructor() {
        this._dependencyResolver = new pip_services_commons_node_1.DependencyResolver();
        this._logger = new pip_services_commons_node_2.CompositeLogger();
        this._counters = new pip_services_commons_node_3.CompositeCounters();
    }
    configure(config) {
        this._dependencyResolver.configure(config);
        this._logger.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._logger.setReferences(references);
        this._counters.setReferences(references);
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map