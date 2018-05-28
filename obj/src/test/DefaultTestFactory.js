"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const Shutdown_1 = require("./Shutdown");
class DefaultTestFactory extends pip_services_commons_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DefaultTestFactory.ShutdownDescriptor, Shutdown_1.Shutdown);
    }
}
DefaultTestFactory.Descriptor = new pip_services_commons_node_2.Descriptor("pip-services", "factory", "test", "default", "1.0");
DefaultTestFactory.ShutdownDescriptor = new pip_services_commons_node_2.Descriptor("pip-services", "shutdown", "*", "*", "1.0");
exports.DefaultTestFactory = DefaultTestFactory;
//# sourceMappingURL=DefaultTestFactory.js.map