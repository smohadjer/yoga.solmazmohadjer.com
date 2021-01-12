//var express = require('express');
//var app = express();
var port = 12443;
var app = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World! Node.js is working correctly at port 12443.\n');
};

var http = require('http');
var httpServer = http.createServer(app).listen(port, () => {
    console.log('hello world');
});

/*
app.all('/node/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

require('./routes')(app);
*/

/*
app.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send('Hello Seattle\n');
});
*/
