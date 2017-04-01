let assert = require('chai').assert;

import { ConfigParams } from 'pip-services-commons-node';
import { ContainerInfo } from '../../src/info/ContainerInfo';

suite('ContainerInfo', ()=> {
    let containerInfo: ContainerInfo;

    beforeEach(() => {
        containerInfo = new ContainerInfo();
    });

    test('Name', () => {
        assert.equal(containerInfo.name, "unknown");

        let update: string = "new name";
        containerInfo.name = update;
        assert.equal(containerInfo.name, update);
    });    

    test('Description', () => {
        assert.isNull(containerInfo.description);

        let update: string = "new description";
        containerInfo.description = update;
        assert.equal(containerInfo.description, update);
    });    

    test('ContainerId', () => {
        assert.isNotNull(containerInfo.containerId);

        let update: string = "new container id";
        containerInfo.containerId = update;
        assert.equal(containerInfo.containerId, update);
    });    

    test('StartTime', () => {
        var now = new Date();

        assert.equal(containerInfo.startTime.getFullYear(), now.getFullYear());
        assert.equal(containerInfo.startTime.getMonth(), now.getMonth());

        containerInfo.startTime = new Date(1975, 4, 8);
        assert.equal(containerInfo.startTime.getFullYear(), 1975);
        assert.equal(containerInfo.startTime.getMonth(), 4);
        assert.equal(containerInfo.startTime.getDate(), 8);
    });    

    test('FromConfig', () => {
        let config: ConfigParams = ConfigParams.fromTuples(
            "info.name", "new name",
            "info.description", "new description",
            "properties.access_key", "key",
            "properties.store_key", "store key"
        );

        let containerInfo: ContainerInfo = ContainerInfo.fromConfig(config);
        assert.equal(containerInfo.name, "new name");
        assert.equal(containerInfo.description, "new description");
    });    

});
