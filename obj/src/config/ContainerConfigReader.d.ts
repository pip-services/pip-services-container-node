import { ContainerConfig } from './ContainerConfig';
export declare class ContainerConfigReader {
    static readFromFile(correlationId: string, path: string): ContainerConfig;
    static readFromJsonFile(correlationId: string, path: string): ContainerConfig;
    static readFromYamlFile(correlationId: string, path: string): ContainerConfig;
}
