"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ContainerInfo_1 = require("./ContainerInfo");
class ContainerInfoFactory extends pip_services_commons_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ContainerInfoFactory.ContainerInfoDescriptor, ContainerInfo_1.ContainerInfo);
    }
}
ContainerInfoFactory.Descriptor = new pip_services_commons_node_2.Descriptor("pip-services-container", "factory", "container-info", "default", "1.0");
ContainerInfoFactory.ContainerInfoDescriptor = new pip_services_commons_node_2.Descriptor("pip-services-container", "container-info", "default", "*", "1.0");
exports.ContainerInfoFactory = ContainerInfoFactory;
//# sourceMappingURL=ContainerInfoFactory.js.map