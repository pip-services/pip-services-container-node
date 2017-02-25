import { ConsoleLogger } from 'pip-services-commons-node';

import { ContainerConfig } from './config/ContainerConfig';
import { Container } from './Container';

export class ProcessContainer extends Container {

    public constructor() {
        super();

        this._logger = new ConsoleLogger();
    }

    public readConfigFromArgumentsOrFile(correlationId: string, args: string[], defaultPath: string): void {
        // node <js file> <config>
    	let path: string = args.length > 2 ? args[2] : defaultPath;
    	this.readConfigFromFile(correlationId, path);
    }
    
    private captureErrors(correlationId: string): void {
        // Log uncaught exceptions
        process.on('uncaughtException', (ex) => {
			this._logger.fatal(correlationId, ex, "Process is terminated");
            process.exit(1);
        });
    }

    private captureExit(correlationId: string): void {
        this._logger.info(null, "Press Control-C to stop the microservice...");

        // Gracefully shutdown
        process.on('exit', function () {
            this.stop(correlationId);
            this._logger.info(correlationId, "Goodbye!");
        });
    }

    public run(correlationId: string): void {
        this.captureErrors(correlationId);
    	this.start(correlationId, (err) => {
            this.captureExit(correlationId);
        });
    }

    public runWithConfig(correlationId: string, config: ContainerConfig): void {
    	this._config = config;
    	this.run(correlationId);
    }

    public runWithArgumentsOrConfigFile(correlationId: string, args: string[], defaultPath: string): void {
        if (args == null || args.length == 0)
    	    this.readConfigFromFile(correlationId, defaultPath);
        else
        	this.readConfigFromArgumentsOrFile(correlationId, args, defaultPath);

    	this.run(correlationId);
    }

}
