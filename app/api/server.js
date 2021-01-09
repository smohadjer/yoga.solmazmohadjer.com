var fs = require('fs');
var privateKey  = fs.readFileSync('/etc/apache2/server.key', 'utf8');
var certificate = fs.readFileSync('/etc/apache2/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
var port = 12443;

/*
var http = require('http');
var httpServer = http.createServer(app);
httpServer.listen();
*/

var https = require('https');
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log("https server started on port : " + port)
});

app.all('/node/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

require('./routes')(app);

/*
app.get('/', function(req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send('Hello Seattle\n');
});
*/
