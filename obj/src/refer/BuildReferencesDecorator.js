"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ReferencesDecorator_1 = require("./ReferencesDecorator");
class BuildReferencesDecorator extends ReferencesDecorator_1.ReferencesDecorator {
    constructor(baseReferences, parentReferences) {
        super(baseReferences, parentReferences);
        this.buildEnabled = true;
    }
    findFactory(locator) {
        let components = this.getAll();
        for (let index = 0; index < components.length; index++) {
            let component = components[index];
            if (_.isFunction(component.canCreate) && _.isFunction(component.create)) {
                if (component.canCreate(locator))
                    return component;
            }
        }
        return null;
    }
    create(locator) {
        // Find factory
        let factory = this.findFactory(locator);
        if (factory == null)
            return null;
        try {
            // Create component
            return factory.create(locator);
        }
        catch (ex) {
            return null;
        }
    }
    find(query, required) {
        let components = super.find(query, false);
        let locator = query.locator;
        // Try to create component
        if (components.length == 0 && this.buildEnabled) {
            let component = this.create(locator);
            if (component != null) {
                try {
                    this.parentReferences.put(locator, component);
                    components.push(component);
                }
                catch (ex) {
                    // Ignore exception
                }
            }
        }
        // Throw exception is no required components found
        if (required && components.length == 0)
            throw new pip_services_commons_node_1.ReferenceException(null, locator);
        return components;
    }
}
exports.BuildReferencesDecorator = BuildReferencesDecorator;
//# sourceMappingURL=BuildReferencesDecorator.js.map