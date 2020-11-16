var express = require('express');

var app = express();

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

app.listen(12443);

console.log('Listening on port 12443');
