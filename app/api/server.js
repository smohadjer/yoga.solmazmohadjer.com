const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

console.log('starting server...');

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

require('./routes')(app);

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})


