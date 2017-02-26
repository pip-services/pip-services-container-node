"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const ReferencesDecorator_1 = require("./ReferencesDecorator");
class LinkReferencesDecorator extends ReferencesDecorator_1.ReferencesDecorator {
    constructor(baseReferences, parentReferences) {
        super(baseReferences, parentReferences);
        this.linkEnabled = true;
    }
    put(locator, component) {
        super.put(locator, component);
        if (this.linkEnabled)
            pip_services_commons_node_1.Referencer.setReferencesForOne(this.parentReferences, component);
    }
    remove(locator) {
        let component = super.remove(locator);
        if (this.linkEnabled)
            pip_services_commons_node_1.Referencer.unsetReferencesForOne(component);
        return component;
    }
    removeAll(locator) {
        let components = super.removeAll(locator);
        if (this.linkEnabled)
            pip_services_commons_node_1.Referencer.unsetReferences(components);
        return components;
    }
}
exports.LinkReferencesDecorator = LinkReferencesDecorator;
//# sourceMappingURL=LinkReferencesDecorator.js.map