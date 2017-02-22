"use strict";
const Container_1 = require("./Container");
class ProcessContainer extends Container_1.Container {
    readConfigFromArgumentsOrFile(correlationId, args, defaultPath) {
        let path = args.length > 0 ? args[0] : defaultPath;
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
        this._logger.info(null, "Press Control-C to stop the microservice...");
        // Gracefully shutdown
        process.on('exit', function () {
            this.stop(correlationId);
            this._logger.info(correlationId, "Goodbye!");
        });
    }
    run(correlationId) {
        this.captureErrors(correlationId);
        this.start(correlationId, (err) => {
            this.captureExit(correlationId);
        });
    }
    runWithConfig(correlationId, config) {
        this.config = config;
        this.run(correlationId);
    }
    runWithConfigFile(correlationId, args, path) {
        if (args == null || args.length == 0)
            this.readConfigFromFile(correlationId, path);
        else
            this.readConfigFromArgumentsOrFile(correlationId, args, path);
        this.run(correlationId);
    }
}
exports.ProcessContainer = ProcessContainer;
//# sourceMappingURL=ProcessContainer.js.map