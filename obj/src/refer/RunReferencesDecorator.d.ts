import { IReferences } from 'pip-services-commons-node';
import { ReferencesDecorator } from './ReferencesDecorator';
export declare class RunReferencesDecorator extends ReferencesDecorator {
    constructor(baseReferences: IReferences, parentReferences: IReferences);
    openEnabled: boolean;
    closeEnabled: boolean;
    put(locator: any, component: any): void;
    remove(locator: any): any;
    removeAll(locator: any): any[];
}
