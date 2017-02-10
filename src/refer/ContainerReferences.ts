import { ManagedReferences } from 'pip-services-commons-node';
import { TypeReflector } from 'pip-services-commons-node';
import { ReferenceException, CreateException } from 'pip-services-commons-node';
import { IConfigurable, IReferenceable } from 'pip-services-commons-node';

import { ComponentConfig } from '../config/ComponentConfig';
import { ContainerConfig } from '../config/ContainerConfig';

export class ContainerReferences extends ManagedReferences {

    private createStatically(locator: any): any {
        var component = this._builder.create(locator);
        if (component == null)
            throw new ReferenceException(null, locator);
        return component;
    }

    public putFromConfig(config: ContainerConfig): void {
        for(var i = 0; i < config.length; i++) {
            let componentConfig: ComponentConfig = config[i];
            let component: any;
            let locator: any;

            try {
                // Create component dynamically
                if (componentConfig.type != null) {
                    locator = componentConfig.type;
                    component = TypeReflector.createInstanceByDescriptor(componentConfig.type);
                // Or create component statically
                } else if (componentConfig.descriptor != null) {
                    locator = componentConfig.descriptor;
                    component = this.createStatically(componentConfig.descriptor);
                }

                // Check that component was created
                if (component == null) {
                    throw new CreateException("CANNOT_CREATE_COMPONENT", "Cannot create component")
                        .withDetails("config", config);
                }

                // Add component to the list
                if (component.locate || component.getDescriptor)
                    this._references.put(component);
                else
                    this._references.put(component, locator);

                if (component.configure) {
                    // Configure component
                    var configurable = component as IConfigurable;
                    configurable.configure(componentConfig.config);
                }

                // Set references to factories
                if (component.canCreate && component.create) {
                    var referenceable = component as IReferenceable;
                    referenceable.setReferences(this);
                }
            } catch (ex) {
                throw new ReferenceException(null, locator)
                    .withCause(ex);
            }
        }
    }
		
}