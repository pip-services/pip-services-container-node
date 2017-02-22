import { ContainerConfig } from './config/ContainerConfig';
import { Container } from './Container';
export declare class ProcessContainer extends Container {
    readConfigFromArgumentsOrFile(correlationId: string, args: string[], defaultPath: string): void;
    private captureErrors(correlationId);
    private captureExit(correlationId);
    run(correlationId: string): void;
    runWithConfig(correlationId: string, config: ContainerConfig): void;
    runWithConfigFile(correlationId: string, args: string[], path: string): void;
}
