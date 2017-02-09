"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ContainerInfo_1 = require("./ContainerInfo");
class ContainerInfoFactory {
    getDescriptor() {
        return ContainerInfoFactory.descriptor;
    }
    canCreate(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor == null)
            return false;
        if (descriptor.match(ContainerInfo_1.ContainerInfo.descriptor))
            return true;
        return false;
    }
    create(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor == null)
            return null;
        if (descriptor.match(ContainerInfo_1.ContainerInfo.descriptor))
            return new ContainerInfo_1.ContainerInfo();
        return null;
    }
}
ContainerInfoFactory.descriptor = new pip_services_commons_node_1.Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
exports.ContainerInfoFactory = ContainerInfoFactory;
//# sourceMappingURL=ContainerInfoFactory.js.map