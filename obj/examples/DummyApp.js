"use strict";
var http = require('http');
const DummyProcess_1 = require("./DummyProcess");
console.log('Hi!');
new DummyProcess_1.DummyProcess().runWithArguments([]);
http.createServer(function (req, res) {
    console.log('Request arrived!');
    res.end();
}).listen(8080, function (err) {
    if (err)
        console.log(err);
});
//# sourceMappingURL=DummyApp.js.map