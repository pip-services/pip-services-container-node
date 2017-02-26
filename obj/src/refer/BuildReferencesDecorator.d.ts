import { IReferences } from 'pip-services-commons-node';
import { ReferenceQuery } from 'pip-services-commons-node';
import { ReferencesDecorator } from './ReferencesDecorator';
export declare class BuildReferencesDecorator extends ReferencesDecorator {
    constructor(baseReferences: IReferences, parentReferences: IReferences);
    buildEnabled: boolean;
    private findFactory(locator);
    create(locator: any): any;
    find<T>(query: ReferenceQuery, required: boolean): T[];
}
