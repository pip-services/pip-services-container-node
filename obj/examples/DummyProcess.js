"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProcessContainer_1 = require("../src/ProcessContainer");
const DummyFactory_1 = require("./DummyFactory");
class DummyProcess extends ProcessContainer_1.ProcessContainer {
    initReferences(references) {
        super.initReferences(references);
        // Factory to statically resolve dummy components
        references.put(new DummyFactory_1.DummyFactory());
    }
    runWithArguments(args) {
        return this.runWithArgumentsOrConfigFile("dummy", args, "./config/dummy.yaml");
    }
}
exports.DummyProcess = DummyProcess;
//# sourceMappingURL=DummyProcess.js.map