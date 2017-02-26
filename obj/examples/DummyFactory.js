"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const DummyController_1 = require("./DummyController");
class DummyFactory {
    canCreate(locator) {
        if (locator instanceof pip_services_commons_node_1.Descriptor) {
            let descriptor = locator;
            if (descriptor.match(DummyFactory.ControllerDescriptor))
                return true;
        }
        return false;
    }
    create(locator) {
        if (locator instanceof pip_services_commons_node_1.Descriptor) {
            let descriptor = locator;
            if (descriptor.match(DummyFactory.ControllerDescriptor))
                return new DummyController_1.DummyController();
        }
        return null;
    }
}
DummyFactory.Descriptor = new pip_services_commons_node_1.Descriptor("pip-services-dummies", "factory", "default", "default", "1.0");
DummyFactory.ControllerDescriptor = new pip_services_commons_node_1.Descriptor("pip-services-dummies", "controller", "default", "*", "1.0");
exports.DummyFactory = DummyFactory;
//# sourceMappingURL=DummyFactory.js.map