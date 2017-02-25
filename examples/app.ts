// var http = require('http');

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

import { DummyProcess } from './DummyProcess';

try {
    new DummyProcess().runWithArguments(process.argv);
} catch (ex) {
    console.error(ex);
}
