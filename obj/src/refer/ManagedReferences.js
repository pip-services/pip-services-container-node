"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_commons_node_3 = require("pip-services-commons-node");
const pip_services_commons_node_4 = require("pip-services-commons-node");
const ReferencesDecorator_1 = require("./ReferencesDecorator");
const BuildReferencesDecorator_1 = require("./BuildReferencesDecorator");
const LinkReferencesDecorator_1 = require("./LinkReferencesDecorator");
const RunReferencesDecorator_1 = require("./RunReferencesDecorator");
class ManagedReferences extends ReferencesDecorator_1.ReferencesDecorator {
    constructor(tuples = null) {
        super(null, null);
        this._references = new pip_services_commons_node_3.References(tuples);
        this._builder = new BuildReferencesDecorator_1.BuildReferencesDecorator(this._references, this);
        this._linker = new LinkReferencesDecorator_1.LinkReferencesDecorator(this._builder, this);
        this._runner = new RunReferencesDecorator_1.RunReferencesDecorator(this._linker, this);
        this.baseReferences = this._runner;
    }
    isOpened() {
        let components = this._references.getAll();
        return pip_services_commons_node_1.Opener.isOpened(components);
    }
    open(correlationId, callback) {
        let components = this._references.getAll();
        pip_services_commons_node_4.Referencer.setReferences(this, components);
        pip_services_commons_node_1.Opener.open(correlationId, components);
    }
    close(correlationId, callback) {
        let components = this._references.getAll();
        pip_services_commons_node_2.Closer.close(correlationId, components);
        pip_services_commons_node_4.Referencer.unsetReferences(components);
    }
    static fromTuples(...tuples) {
        return new ManagedReferences(tuples);
    }
}
exports.ManagedReferences = ManagedReferences;
//# sourceMappingURL=ManagedReferences.js.map