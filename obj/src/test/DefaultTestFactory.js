"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const CrashSimulator_1 = require("./CrashSimulator");
class DefaultTestFactory extends pip_services_commons_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DefaultTestFactory.CrashSimulatorDescriptor, CrashSimulator_1.CrashSimulator);
    }
}
DefaultTestFactory.Descriptor = new pip_services_commons_node_2.Descriptor("pip-services", "factory", "test", "default", "1.0");
DefaultTestFactory.CrashSimulatorDescriptor = new pip_services_commons_node_2.Descriptor("pip-services", "crash", "*", "*", "1.0");
exports.DefaultTestFactory = DefaultTestFactory;
//# sourceMappingURL=DefaultTestFactory.js.map