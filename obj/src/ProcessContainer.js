"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const Container_1 = require("./Container");
class ProcessContainer extends Container_1.Container {
    constructor() {
        super();
        this._logger = new pip_services_commons_node_1.ConsoleLogger();
    }
    readConfigFromArgumentsOrFile(correlationId, args, defaultPath) {
        // node <js file> <config>
        let path = args.length > 2 ? args[2] : defaultPath;
        this.readConfigFromFile(correlationId, path);
    }
    captureErrors(correlationId) {
        // Log uncaught exceptions
        process.on('uncaughtException', (ex) => {
            this._logger.fatal(correlationId, ex, "Process is terminated");
            process.exit(1);
        });
    }
    captureExit(correlationId) {
        this._logger.info(correlationId, "Press Control-C to stop the microservice...");
        // Activate graceful exit
        process.on('SIGINT', () => {
            process.exit();
        });
        // Gracefully shutdown
        process.on('exit', () => {
            this.stop(correlationId);
            this._logger.info(correlationId, "Goodbye!");
        });
    }
    run(correlationId) {
        this.captureErrors(correlationId);
        this.captureExit(correlationId);
        this.start(correlationId);
    }
    runWithConfig(correlationId, config) {
        this._config = config;
        this.run(correlationId);
    }
    runWithArgumentsOrConfigFile(correlationId, args, defaultPath) {
        if (args == null || args.length == 0)
            this.readConfigFromFile(correlationId, defaultPath);
        else
            this.readConfigFromArgumentsOrFile(correlationId, args, defaultPath);
        this.run(correlationId);
    }
}
exports.ProcessContainer = ProcessContainer;
//# sourceMappingURL=ProcessContainer.js.map