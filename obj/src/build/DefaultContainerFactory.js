"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ContainerInfoFactory_1 = require("../info/ContainerInfoFactory");
class DefaultContainerFactory extends pip_services_commons_node_1.CompositeFactory {
    constructor(...factories) {
        super(...factories);
        this.add(new ContainerInfoFactory_1.ContainerInfoFactory());
        this.add(new pip_services_commons_node_1.DefaultLoggerFactory());
        this.add(new pip_services_commons_node_1.DefaultCountersFactory());
        this.add(new pip_services_commons_node_1.DefaultCacheFactory());
    }
    getDescriptor() {
        return DefaultContainerFactory.descriptor;
    }
}
DefaultContainerFactory.descriptor = new pip_services_commons_node_2.Descriptor("pip-services-container", "factory", "container", "default", "1.0");
exports.DefaultContainerFactory = DefaultContainerFactory;
//# sourceMappingURL=DefaultContainerFactory.js.map