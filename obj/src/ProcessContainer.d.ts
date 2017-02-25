import { ContainerConfig } from './config/ContainerConfig';
import { Container } from './Container';
export declare class ProcessContainer extends Container {
    constructor();
    readConfigFromArgumentsOrFile(correlationId: string, args: string[], defaultPath: string): void;
    private captureErrors(correlationId);
    private captureExit(correlationId);
    run(correlationId: string): void;
    runWithConfig(correlationId: string, config: ContainerConfig): void;
    runWithArgumentsOrConfigFile(correlationId: string, args: string[], defaultPath: string): void;
}
