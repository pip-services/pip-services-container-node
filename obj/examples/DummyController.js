"use strict";
const pip_services_commons_node_1 = require("pip-services-commons-node");
class DummyController {
    constructor() {
        this._logger = new pip_services_commons_node_1.CompositeLogger();
        this._message = "Hello World!";
        this._counter = 0;
        this._timer = new pip_services_commons_node_1.FixedRateTimer(this, 1000, 1000);
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get counter() {
        return this._counter;
    }
    set counter(value) {
        this._counter = value;
    }
    getDescriptor() {
        return DummyController.descriptor;
    }
    configure(config) {
        this.message = config.getAsStringWithDefault("message", this.message);
    }
    setReferences(references) {
        this._logger.setReferences(references);
    }
    isOpened() {
        return this._timer.isStarted();
    }
    open(correlationId, callback) {
        try {
            this._timer.start();
            this._logger.trace(correlationId, "Dummy controller opened");
            if (callback)
                callback();
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Failed to open Dummy container");
            if (callback)
                callback(ex);
            else
                throw ex;
        }
    }
    close(correlationId, callback) {
        try {
            this._timer.stop();
            this._logger.trace(correlationId, "Dummy controller closed");
            if (callback)
                callback();
        }
        catch (ex) {
            this._logger.error(correlationId, ex, "Failed to close Dummy container");
            if (callback)
                callback(ex);
            else
                throw ex;
        }
    }
    notify(correlationId, args, callback) {
        this._logger.info(correlationId, "{0} - {1}", this.counter++, this.message);
        callback();
    }
}
DummyController.descriptor = new pip_services_commons_node_1.Descriptor("pip-services-dummies", "controller", "default", "default", "1.0");
exports.DummyController = DummyController;
//# sourceMappingURL=DummyController.js.map