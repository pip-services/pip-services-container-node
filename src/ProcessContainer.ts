import { ContainerConfig } from './config/ContainerConfig';
import { Container } from './Container';

export class ProcessContainer extends Container {

    public readConfigFromArgumentsOrFile(correlationId: string, args: string[], defaultPath: string): void {
    	let path: string = args.length > 0 ? args[0] : defaultPath;
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
    	this.config = config;
    	this.run(correlationId);
    }

    public runWithConfigFile(correlationId: string, args: string[], path: string): void {
        if (args == null || args.length == 0)
    	    this.readConfigFromFile(correlationId, path);
        else
        	this.readConfigFromArgumentsOrFile(correlationId, args, path);
    	this.run(correlationId);
    }

}
