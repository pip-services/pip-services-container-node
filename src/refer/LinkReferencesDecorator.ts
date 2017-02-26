import { IReferences } from 'pip-services-commons-node';
import { Referencer } from 'pip-services-commons-node';

import { ReferencesDecorator } from './ReferencesDecorator'

export class LinkReferencesDecorator extends ReferencesDecorator {
    public constructor(baseReferences: IReferences, parentReferences: IReferences) {
    	super(baseReferences, parentReferences);
    }

	public linkEnabled: boolean = true;

    public put(locator: any, component: any): any {
        super.put(locator, component);

        if (this.linkEnabled)
            Referencer.setReferencesForOne(this.parentReferences, component);
    }

    public remove(locator: any): any {
        let component = super.remove(locator);

        if (this.linkEnabled)
            Referencer.unsetReferencesForOne(component);

        return component;
    }

    public removeAll(locator: any): any[] {
        let components = super.removeAll(locator);

        if (this.linkEnabled)
            Referencer.unsetReferences(components);

        return components;
    }
}
