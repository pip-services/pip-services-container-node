var http = require('http');

import { DummyProcess } from './DummyProcess';

console.log('Hi1!');

new DummyProcess().runWithArguments([]);

console.log('Hi2!');

http.createServer(function(req, res) {
    console.log('Request arrived!');
    res.end();
}).listen(8080, function (err) {
    if (err)
        console.log(err);
});
