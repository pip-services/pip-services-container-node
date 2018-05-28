let _ = require('lodash');

import { ConfigParams, ApplicationException } from "pip-services-commons-node";
import { IConfigurable } from "pip-services-commons-node";
import { IOpenable } from "pip-services-commons-node";
import { RandomInteger } from "pip-services-commons-node";

export class Shutdown implements IConfigurable, IOpenable {
    private _interval: any;
    private _mode: string = 'exception';
    private _minTimeout: number = 300000;
    private _maxTimeout: number = 900000;

    public constructor() {}

    public configure(config: ConfigParams): void {
        this._mode = config.getAsStringWithDefault('mode', this._mode);
        this._minTimeout = config.getAsIntegerWithDefault('min_timeout', this._minTimeout);
        this._maxTimeout = config.getAsIntegerWithDefault('max_timeout', this._maxTimeout);
    }

    public isOpened(): boolean {
        return this._interval != null;
    }

    public open(correlationId: string, callback: (err: any) => void): void {
        if (this._interval != null)
            clearInterval(this._interval);

        let timeout = RandomInteger.nextInteger(this._minTimeout, this._maxTimeout);
        this._interval = setInterval(() => {
            this.shutdown();
        }, timeout);

        if (callback) callback(null);
    }

    public close(correlationId: string, callback: (err: any) => void): void {
        if (this._interval != null) {
            clearInterval(this._interval);
            this._interval = null;
        }
        
        if (callback) callback(null);
    }

    public shutdown(): void {
        if (this._mode == 'null' || this._mode == 'nullpointer') {
            let obj = null;
            obj.crash = 123;
        } else if (this._mode == 'zero' || this._mode == 'dividebyzero') {
            let crash = 0 / 100;
        } else if (this._mode == 'exit' || this._mode == 'processexit') {
            process.exit(1);
        } else {
            let err = new ApplicationException('test', null, 'CRASH', 'Crash test exception');
            throw err;
        }
    }
}