import { IOpenable } from 'pip-services-commons-node';
import { Opener } from 'pip-services-commons-node';
import { Closer } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { Referencer } from 'pip-services-commons-node';

import { ReferencesDecorator } from './ReferencesDecorator';
import { BuildReferencesDecorator } from './BuildReferencesDecorator';
import { LinkReferencesDecorator } from './LinkReferencesDecorator';
import { RunReferencesDecorator } from './RunReferencesDecorator';

export class ManagedReferences extends ReferencesDecorator implements IOpenable {
    protected _references: References;
    protected _builder: BuildReferencesDecorator;
    protected _linker: LinkReferencesDecorator;
    protected _runner: RunReferencesDecorator;

    public constructor(tuples: any[] = null) {
        super(null, null);

        this._references = new References(tuples);
        this._builder = new BuildReferencesDecorator(this._references, this);
        this._linker = new LinkReferencesDecorator(this._builder, this);
        this._runner = new RunReferencesDecorator(this._linker, this);

        this.baseReferences = this._runner;
    }

    public isOpened(): boolean {
        let components = this._references.getAll();
        return Opener.isOpened(components);
    }
    
    public open(correlationId: string, callback?: (err: any) => void): void {
        let components = this._references.getAll();
        Referencer.setReferences(this, components);
        Opener.open(correlationId, components);
    }

    public close(correlationId: string, callback?: (err: any) => void): void {
        let components = this._references.getAll();
        Closer.close(correlationId, components);
        Referencer.unsetReferences(components);
    }

	public static fromTuples(...tuples: any[]): ManagedReferences {
		return new ManagedReferences(tuples);
	}
}
