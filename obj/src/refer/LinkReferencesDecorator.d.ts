import { IReferences } from 'pip-services-commons-node';
import { ReferencesDecorator } from './ReferencesDecorator';
export declare class LinkReferencesDecorator extends ReferencesDecorator {
    constructor(baseReferences: IReferences, parentReferences: IReferences);
    linkEnabled: boolean;
    put(locator: any, component: any): any;
    remove(locator: any): any;
    removeAll(locator: any): any[];
}
