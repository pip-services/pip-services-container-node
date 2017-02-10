import {
    IDescriptable,
    IReferenceable,
    IReferences,
    IReconfigurable,
    IOpenable,
    INotifiable,
    CompositeLogger,
    FixedRateTimer,
    Descriptor,
    Parameters,
    ConfigParams
} from 'pip-services-commons-node';

import { ContainerConfig } from '../src/config/ContainerConfig';

export class DummyController implements IDescriptable, IReferenceable, IReconfigurable, IOpenable, INotifiable {

    public static descriptor: Descriptor = new Descriptor("pip-services-dummies", "controller", "default", "default", "1.0");

    private readonly _timer: FixedRateTimer;
    private readonly _logger: CompositeLogger = new CompositeLogger();
    private _message: string = "Hello World!";
    private _counter: number = 0;

    public constructor() {
        this._timer = new FixedRateTimer(
                this, 1000, 1000
            );
    }

	public get message(): string { 
        return this._message; 
    }
	public set message(value: string) { 
        this._message = value; 
    }

	public get counter(): number { 
        return this._counter; 
    }
	public set counter(value: number) { 
        this._counter = value; 
    }

    public getDescriptor(): Descriptor {
        return DummyController.descriptor;
    }

    public configure(config: ConfigParams): void {
        this.message = config.getAsStringWithDefault("message", this.message);
    }

    public setReferences(references: IReferences): void {
        this._logger.setReferences(references);
    }

    public isOpened(): boolean {
        return this._timer.isStarted();
    }

    public open(correlationId: string, callback: (err?: any) => void): void {
        try {
            this._timer.start();
            this._logger.trace(correlationId, "Dummy controller opened");
            if (callback)
                callback();
        } catch (ex) {
            this._logger.error(correlationId, ex, "Failed to open Dummy container");
            if (callback) callback(ex);
            else throw ex;
        }
    }
		
    public close(correlationId: string, callback?: (err?: any) => void): void {
        try {
            this._timer.stop();
            this._logger.trace(correlationId, "Dummy controller closed");
            if (callback)
                callback();
        } catch (ex) {
            this._logger.error(correlationId, ex, "Failed to close Dummy container");
            if (callback) callback(ex);
            else throw ex;
        }
    }

    public notify(correlationId: string, args: Parameters, callback: (err?) => void): void {
        this._logger.info(correlationId, "{0} - {1}", this.counter++, this.message);
        callback();
    }

}
