"use strict";
var http = require('http');
const DummyProcess_1 = require("./DummyProcess");
console.log('Hi1!');
new DummyProcess_1.DummyProcess().runWithArguments([]);
console.log('Hi2!');
http.createServer(function (req, res) {
    console.log('Request arrived!');
    res.end();
}).listen(8080, function (err) {
    if (err)
        console.log(err);
});
//# sourceMappingURL=DummyApp.js.map