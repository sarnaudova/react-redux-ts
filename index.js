
var express = require('express');
var app = express();
var port = 8080;
var Async = require('async');

//attach validate internals
var validateInternals = require('validate-internals-ebay');
validateInternals.middleware(app);

app.use('/', function (req, res, next) {
  return next();
});

app.use(express.static('build'));
app.get('/', express.static('build'));

var tasks = [];
//Running additional port 8082 in Non-DEV
tasks.push(function startSSL() {
  var sslport = process.env.SSLPORT || 8082;
  app.listen(sslport, function () {
    console.log('Application(HTTP) Listening on port ' + sslport);
    
  });
});


tasks.push(function startNonSSL() {
  // non-secure port
  app.listen(8080, function () {
    console.log('Application(HTTP) Listening on port ' + 8080);
  });
});

Async.parallel(tasks);

module.exports = app;




