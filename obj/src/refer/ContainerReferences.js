"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
class ContainerReferences extends pip_services_commons_node_1.ManagedReferences {
    createStatically(locator) {
        var component = super._builder.create(locator);
        if (component == null)
            throw new pip_services_commons_node_2.ReferenceException(null, locator);
        return component;
    }
    putFromConfig(config) {
        // foreach (var componentConfig in config)
        // {
        //     object component = null;
        //     object locator = null;
        //     try
        //     {
        //         // Create component dynamically
        //         if (componentConfig.Type != null)
        //         {
        //             locator = componentConfig.Type;
        //             component = TypeReflector.CreateInstanceByDescriptor(componentConfig.Type);
        //         }
        //         // Or create component statically
        //         else if (componentConfig.Descriptor != null)
        //         {
        //             locator = componentConfig.Descriptor;
        //             component = CreateStatically(componentConfig.Descriptor);
        //         }
        //         // Check that component was created
        //         if (component == null)
        //         {
        //             throw new CreateException("CANNOT_CREATE_COMPONENT", "Cannot create component")
        //                     .WithDetails("config", config);
        //         }
        //         // Add component to the list
        //         if (component is ILocateable || component is IDescriptable)
        //             _references.Put(component);
        //         else
        //             _references.Put(component, locator);
        //         // Configure component
        //         var configurable = component as IConfigurable;
        //         configurable?.Configure(componentConfig.Config);
        //         // Set references to factories
        //         if (component is IFactory)
        //         {
        //             var referenceable = component as IReferenceable;
        //             referenceable?.SetReferences(this);
        //         }
        //     }
        //     catch (Exception ex)
        //     {
        //         throw new ReferenceException(null, locator).WithCause(ex);
        //     }
        // }
    }
}
exports.ContainerReferences = ContainerReferences;
//# sourceMappingURL=ContainerReferences.js.map