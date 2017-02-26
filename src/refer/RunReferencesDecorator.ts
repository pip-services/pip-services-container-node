import { IReferences } from 'pip-services-commons-node';
import { ReferenceQuery } from 'pip-services-commons-node'
import { Opener } from 'pip-services-commons-node';
import { Closer } from 'pip-services-commons-node';

import { ReferencesDecorator } from './ReferencesDecorator';

export class RunReferencesDecorator extends ReferencesDecorator {
    public constructor(baseReferences: IReferences, parentReferences: IReferences) {
    	super(baseReferences, parentReferences);
    }

	public openEnabled: boolean = true;
	public closeEnabled: boolean = true;

    public put(locator: any, component: any): void {
        super.put(locator, component);

        if (this.openEnabled)
            Opener.openOne(null, component, null);
    }

    public remove(locator: any): any {
        let component = super.remove(locator);

        if (this.closeEnabled)
            Closer.closeOne(null, component, null);

        return component;
    }

    public removeAll(locator: any): any[] {
        let components = super.removeAll(locator);

        if (this.closeEnabled)
            Closer.close(null, components, null);

        return components;
    }

}