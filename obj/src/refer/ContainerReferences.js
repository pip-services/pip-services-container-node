"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
class ContainerReferences extends pip_services_commons_node_1.ManagedReferences {
    createStatically(locator) {
        var component = this._builder.create(locator);
        if (component == null)
            throw new pip_services_commons_node_3.ReferenceException(null, locator);
        return component;
    }
    putFromConfig(config) {
        for (var i = 0; i < config.length; i++) {
            let componentConfig = config[i];
            let component;
            let locator;
            try {
                // Create component dynamically
                if (componentConfig.type != null) {
                    locator = componentConfig.type;
                    component = pip_services_commons_node_2.TypeReflector.createInstanceByDescriptor(componentConfig.type);
                    // Or create component statically
                }
                else if (componentConfig.descriptor != null) {
                    locator = componentConfig.descriptor;
                    component = this.createStatically(componentConfig.descriptor);
                }
                // Check that component was created
                if (component == null) {
                    throw new pip_services_commons_node_3.CreateException("CANNOT_CREATE_COMPONENT", "Cannot create component")
                        .withDetails("config", config);
                }
                // Add component to the list
                if (component.locate || component.getDescriptor)
                    this._references.put(component);
                else
                    this._references.put(component, locator);
                if (component.configure) {
                    // Configure component
                    var configurable = component;
                    configurable.configure(componentConfig.config);
                }
                // Set references to factories
                if (component.canCreate && component.create) {
                    var referenceable = component;
                    referenceable.setReferences(this);
                }
            }
            catch (ex) {
                throw new pip_services_commons_node_3.ReferenceException(null, locator)
                    .withCause(ex);
            }
        }
    }
}
exports.ContainerReferences = ContainerReferences;
//# sourceMappingURL=ContainerReferences.js.map