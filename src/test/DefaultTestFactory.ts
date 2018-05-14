import { Factory } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';

import { CrashSimulator } from './CrashSimulator';

export class DefaultTestFactory extends Factory {
	public static readonly Descriptor = new Descriptor("pip-services", "factory", "test", "default", "1.0");
	public static readonly CrashSimulatorDescriptor = new Descriptor("pip-services", "crash", "*", "*", "1.0");

	public constructor() {
        super();
		this.registerAsType(DefaultTestFactory.CrashSimulatorDescriptor, CrashSimulator);
	}
}