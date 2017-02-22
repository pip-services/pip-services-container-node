import { IReferences } from 'pip-services-commons-node';
import { ProcessContainer } from '../src/ProcessContainer';
export declare class DummyProcess extends ProcessContainer {
    protected initReferences(references: IReferences): void;
    runWithArguments(args: string[]): void;
}
