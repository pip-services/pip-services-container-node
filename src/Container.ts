import { JsonConfigReader } from 'pip-services-commons-node';
import { YamlConfigReader } from 'pip-services-commons-node';
import { ConfigException } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { Referencer } from 'pip-services-commons-node';
import { Opener } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { ILogger } from 'pip-services-commons-node';
import { NullLogger } from 'pip-services-commons-node';
import { CompositeLogger } from 'pip-services-commons-node';
import { InvalidStateException } from 'pip-services-commons-node';

import { DefaultContainerFactory } from './build/DefaultContainerFactory';
import { ContainerConfig } from './config/ContainerConfig';
import { ContainerConfigReader } from './config/ContainerConfigReader';
import { ContainerInfo } from './info/ContainerInfo';
import { ContainerReferences } from './refer/ContainerReferences';

export class Container {
    protected _logger: ILogger = new NullLogger()
    protected _info: ContainerInfo = new ContainerInfo()
    protected _config: ContainerConfig;
    protected _references: ContainerReferences = new ContainerReferences();

    public constructor(config?: ContainerConfig) {
        this._config = config;
    }

	public getInfo(): ContainerInfo { 
        return this._info; 
    }
	public setInfo(value: ContainerInfo) { 
        this._info = value; 
    }

	public getConfig(): ContainerConfig { 
        return this._config; 
    }
	public setConfig(value: ContainerConfig) { 
        this._config = value; 
    }

	public getReferences(): ContainerReferences { 
        return this._references; 
    }
	public setReferences(value: ContainerReferences) { 
        this._references = value; 
    }

    public readConfigFromFile(correlationId: string, path: string): void {
        this._config = ContainerConfigReader.readFromFile(correlationId, path);
    }

    protected initReferences(references: IReferences): void {
        references.put(DefaultContainerFactory.Descriptor, new DefaultContainerFactory());
    }

    public start(correlationId: string, callback?: (err: any) => void): void {
        if (this._references == null) {
            var err = new InvalidStateException(correlationId, "NO_CONFIG", "Container was not configured");
            if (callback) callback(err);
            else throw err;
            return;
        }

        try {
            this._logger.trace(correlationId, "Starting container.");

            // Create references with configured components
            this.initReferences(this._references);
            this._references.putFromConfig(this._config);

            // Reference and open components
            let components: any[] = this._references.getAll();
            Referencer.setReferences(this._references, components);
            Opener.open(correlationId, components, (err) => {
                // Get reference to logger
                this._logger = new CompositeLogger(this._references);

                // Get reference to container info
                var infoDescriptor = new Descriptor("*", "container-info", "*", "*", "*");
                this._info = this._references.getOneRequired<ContainerInfo>(infoDescriptor);

                this._logger.info(correlationId, "Container {0} started.", this._info.name);

                if (callback) callback(null);
            });
        } catch (ex) {
            this._references = null;
            this._logger.error(correlationId, ex, "Failed to start container");
            
            if (callback) callback(ex);
            else throw ex;
        }
    }
		
    public stop(correlationId: string, callback?: (err: any) => void): void {
        if (this._references == null) {
            var err = new InvalidStateException(correlationId, "NO_STARTED", "Container was not started");
            if (callback) callback(err);
            else throw err;
            return;
        }

        try {
            this._logger.trace(correlationId, "Stopping {0} container", this._info.name);

            // Close and deference components
            this._references.close(correlationId, (err) => {
                this._logger.info(correlationId, "Container {0} stopped", this._info.name);
                if (callback) callback(null);
            });

        } catch (ex) {
            this._logger.error(correlationId, ex, "Failed to stop container");
            if (callback) callback(ex);
            else throw ex;
        }
    }
}
