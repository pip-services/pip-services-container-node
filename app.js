var http = require('http');

console.log('Hi1!');

http.createServer(function(req, res) {
    console.log('Request arrived!');
    res.end();
}).listen(8080, function (err) {
    if (err)
        console.log(err);
});
