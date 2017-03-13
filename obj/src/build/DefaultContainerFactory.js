"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
const pip_services_commons_node_4 = require("pip-services-commons-node");
const pip_services_commons_node_5 = require("pip-services-commons-node");
const pip_services_commons_node_6 = require("pip-services-commons-node");
const pip_services_commons_node_7 = require("pip-services-commons-node");
const pip_services_commons_node_8 = require("pip-services-commons-node");
const ContainerInfoFactory_1 = require("../info/ContainerInfoFactory");
class DefaultContainerFactory extends pip_services_commons_node_1.CompositeFactory {
    constructor(...factories) {
        super(...factories);
        this.add(new ContainerInfoFactory_1.ContainerInfoFactory());
        this.add(new pip_services_commons_node_2.DefaultLoggerFactory());
        this.add(new pip_services_commons_node_3.DefaultCountersFactory());
        this.add(new pip_services_commons_node_4.DefaultConfigReaderFactory());
        this.add(new pip_services_commons_node_5.DefaultCacheFactory());
        this.add(new pip_services_commons_node_6.DefaultCredentialStoreFactory());
        this.add(new pip_services_commons_node_7.DefaultDiscoveryFactory());
    }
}
DefaultContainerFactory.Descriptor = new pip_services_commons_node_8.Descriptor("pip-services-container", "factory", "container", "default", "1.0");
exports.DefaultContainerFactory = DefaultContainerFactory;
//# sourceMappingURL=DefaultContainerFactory.js.map