import { 
    JsonConfigReader,
    YamlConfigReader,
    ConfigException,
    Descriptor,
    Referencer,
    Opener,
    IReferences,
    ILogger,
    NullLogger,
    CompositeLogger,
    InvalidStateException
} from 'pip-services-commons-node';

import { DefaultContainerFactory } from './build/DefaultContainerFactory';
import { ContainerConfig } from './config/ContainerConfig';
import { ContainerConfigReader } from './config/ContainerConfigReader';
import { ContainerInfo } from './info/ContainerInfo';
import { ContainerReferences } from './refer/ContainerReferences';

export class Container {

    protected _logger: ILogger = new NullLogger()
    private _info: ContainerInfo = new ContainerInfo()
    private _config: ContainerConfig;
    private _references: ContainerReferences = new ContainerReferences();

    public constructor(config?: ContainerConfig) {
        this.config = config;
    }

	public get info(): ContainerInfo { 
        return this._info; 
    }
	public set info(value: ContainerInfo) { 
        this._info = value; 
    }

	public get config(): ContainerConfig { 
        return this._config; 
    }
	public set config(value: ContainerConfig) { 
        this._config = value; 
    }

	public get references(): ContainerReferences { 
        return this._references; 
    }
	public set references(value: ContainerReferences) { 
        this._references = value; 
    }

    public readConfigFromFile(correlationId: string, path: string): void {
        this.config = ContainerConfigReader.readFromFile(correlationId, path);
    }

    protected initReferences(references: IReferences): void {
        references.put(new DefaultContainerFactory());
    }

    public start(correlationId: string, callback: (err?: any) => void): void {
        if (this.references == null) {
            var err = new InvalidStateException(correlationId, "NO_CONFIG", "Container was not configured");
            if (callback) callback(err);
            else throw err;
        }

        try {
            this._logger.trace(correlationId, "Starting container.");

            // Create references with configured components
            this.initReferences(this.references);
            this.references.putFromConfig(this.config);

            // Reference and open components
            let components: any[] = this.references.getAll();
            Referencer.setReferences(this.references, components);
            Opener.open(correlationId, components, (err) => {
                // Get reference to logger
                this._logger = new CompositeLogger(this.references);

                // Get reference to container info
                var infoDescriptor = new Descriptor("*", "container-info", "*", "*", "*");
                this.info = this.references.getOneRequired<ContainerInfo>(infoDescriptor);

                this._logger.info(correlationId, "Container {0} started.", this.info.name);
            });
        } catch (ex) {
            this.references = null;
            this._logger.error(correlationId, ex, "Failed to start container");
            throw ex;
        }
    }
		
    public stop(correlationId: string, callback?: (err?: any) => void): void {
        if (this.references == null) {
            var err = new InvalidStateException(correlationId, "NO_STARTED", "Container was not started");
            if (callback) callback(err);
            else throw err;
        }

        try {
            this._logger.trace(correlationId, "Stopping {0} container", this.info.name);

            // Close and deference components
            this.references.close(correlationId, (err) => {
                this._logger.info(correlationId, "Container {0} stopped", this.info.name);
                if (callback)
                    callback();
            });

        } catch (ex) {
            this._logger.error(correlationId, ex, "Failed to stop container");
            throw ex;
        }
    }
}
