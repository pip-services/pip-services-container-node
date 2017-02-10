import { IDescriptable, IReferenceable, IReferences, IReconfigurable, IOpenable, INotifiable, Descriptor, Parameters, ConfigParams } from 'pip-services-commons-node';
export declare class DummyController implements IDescriptable, IReferenceable, IReconfigurable, IOpenable, INotifiable {
    static descriptor: Descriptor;
    private readonly _timer;
    private readonly _logger;
    private _message;
    private _counter;
    constructor();
    message: string;
    counter: number;
    getDescriptor(): Descriptor;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    isOpened(): boolean;
    open(correlationId: string, callback: (err?: any) => void): void;
    close(correlationId: string, callback?: (err?: any) => void): void;
    notify(correlationId: string, args: Parameters, callback: (err?) => void): void;
}
