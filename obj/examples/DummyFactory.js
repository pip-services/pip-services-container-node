"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const DummyController_1 = require("./DummyController");
class DummyFactory {
    getDescriptor() {
        return DummyFactory.descriptor;
    }
    canCreate(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor == null)
            return false;
        if (descriptor.match(DummyController_1.DummyController.descriptor))
            return true;
        return false;
    }
    create(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor == null)
            return null;
        if (descriptor.match(DummyController_1.DummyController.descriptor))
            return new DummyController_1.DummyController();
        return null;
    }
}
DummyFactory.descriptor = new pip_services_commons_node_1.Descriptor("pip-services-dummies", "factory", "default", "default", "1.0");
exports.DummyFactory = DummyFactory;
//# sourceMappingURL=DummyFactory.js.map