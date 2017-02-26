"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
class ReferencesDecorator {
    constructor(baseReferences, parentReferences) {
        this.baseReferences = baseReferences != null ? baseReferences : parentReferences;
        this.parentReferences = parentReferences != null ? parentReferences : baseReferences;
    }
    put(locator, component) {
        this.baseReferences.put(locator, component);
    }
    remove(locator) {
        return this.baseReferences.remove(locator);
    }
    removeAll(locator) {
        return this.baseReferences.removeAll(locator);
    }
    getAll() {
        return this.baseReferences.getAll();
    }
    getOneOptional(locator) {
        try {
            let components = this.find(new pip_services_commons_node_1.ReferenceQuery(locator), false);
            return components.length > 0 ? components[0] : null;
        }
        catch (ex) {
            return null;
        }
    }
    getOneRequired(locator) {
        let components = this.find(new pip_services_commons_node_1.ReferenceQuery(locator), true);
        return components.length > 0 ? components[0] : null;
    }
    getOptional(locator) {
        try {
            return this.find(new pip_services_commons_node_1.ReferenceQuery(locator), false);
        }
        catch (ex) {
            return [];
        }
    }
    getRequired(locator) {
        return this.find(new pip_services_commons_node_1.ReferenceQuery(locator), true);
    }
    find(query, required) {
        return this.baseReferences.find(query, required);
    }
}
exports.ReferencesDecorator = ReferencesDecorator;
//# sourceMappingURL=ReferencesDecorator.js.map