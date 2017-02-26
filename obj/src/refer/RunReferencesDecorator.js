"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ReferencesDecorator_1 = require("./ReferencesDecorator");
class RunReferencesDecorator extends ReferencesDecorator_1.ReferencesDecorator {
    constructor(baseReferences, parentReferences) {
        super(baseReferences, parentReferences);
        this.openEnabled = true;
        this.closeEnabled = true;
    }
    put(locator, component) {
        super.put(locator, component);
        if (this.openEnabled)
            pip_services_commons_node_1.Opener.openOne(null, component, null);
    }
    remove(locator) {
        let component = super.remove(locator);
        if (this.closeEnabled)
            pip_services_commons_node_2.Closer.closeOne(null, component, null);
        return component;
    }
    removeAll(locator) {
        let components = super.removeAll(locator);
        if (this.closeEnabled)
            pip_services_commons_node_2.Closer.close(null, components, null);
        return components;
    }
}
exports.RunReferencesDecorator = RunReferencesDecorator;
//# sourceMappingURL=RunReferencesDecorator.js.map