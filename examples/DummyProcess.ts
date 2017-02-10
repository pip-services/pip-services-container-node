import { IReferences } from 'pip-services-commons-node';

import { ProcessContainer } from '../src/ProcessContainer';
import { DummyFactory } from './DummyFactory';

export class DummyProcess extends ProcessContainer {

    protected initReferences(references: IReferences): void {
        super.initReferences(references);

        // Factory to statically resolve dummy components
        references.put(new DummyFactory());
    }

    public runWithArguments(args: string[]): void {
        return this.runWithConfigFile("dummy", args, "./dummy.yaml");
    }

}
