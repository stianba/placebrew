'use strict';

// Require modules
var express	= require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Require services
var constants = require('./server/constants');

// Connect to mongodb server
mongoose.connect('mongodb://localhost:27017/brews');

// Setup server
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');

// Configure static content
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));

// Require routes
require('./server/routes.js')(app);

// Listen
var port = constants.PORT || 8080;

app.listen(port, function() {
	console.log('Server running on ' + port);
});

// Export app
module.exports = app;