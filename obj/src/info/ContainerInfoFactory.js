"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ContainerInfo_1 = require("./ContainerInfo");
class ContainerInfoFactory {
    canCreate(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor != null) {
            if (descriptor.match(ContainerInfoFactory.ContainerInfoDescriptor))
                return true;
        }
        return false;
    }
    create(locator) {
        if (locator == null)
            throw new Error("Locator cannot be null");
        let descriptor = locator;
        if (descriptor != null) {
            if (descriptor.match(ContainerInfoFactory.ContainerInfoDescriptor))
                return new ContainerInfo_1.ContainerInfo();
        }
        return null;
    }
}
ContainerInfoFactory.Descriptor = new pip_services_commons_node_1.Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
ContainerInfoFactory.ContainerInfoDescriptor = new pip_services_commons_node_1.Descriptor("pip-services-container", "container-info", "default", "*", "1.0");
exports.ContainerInfoFactory = ContainerInfoFactory;
//# sourceMappingURL=ContainerInfoFactory.js.map