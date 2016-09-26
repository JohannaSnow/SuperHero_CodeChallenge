/* Main server file */
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//Database connection
var connection = require('../modules/connection');
mongoose.connect(connection);

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// require and use index router
var index = require('../routers/index');
app.use('/', index);

//require and user pets router
var heroes = require('../routers/heroes');
app.use('/heroes', heroes);

// static files
app.use(express.static('public'));

// server listen port
var portDecision = process.env.PORT || 4242;

var server = app.listen(portDecision, function() {
  var port = server.address().port;
  console.log('I can hear you', port);
});

// base url
app.get('/*', function(req, res){
 console.log('request params:',req.params);
 var file = req.params[0] || './views/index.html';
 res.sendFile(path.join(__dirname, '/public/', file));
});
