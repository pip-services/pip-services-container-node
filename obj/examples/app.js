// var http = require('http');
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { DummyProcess } from './DummyProcess';
// console.log('Hi!');
// new DummyProcess().runWithArguments([]);
// http.createServer(function(req, res) {
//     console.log('Request arrived!');
//     res.end();
// }).listen(8080, function (err) {
//     if (err)
//         console.log(err);
// });
const DummyProcess_1 = require("./DummyProcess");
try {
    new DummyProcess_1.DummyProcess().runWithArguments(process.argv);
}
catch (ex) {
    console.error(ex);
}
//# sourceMappingURL=app.js.map