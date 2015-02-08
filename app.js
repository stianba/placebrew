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

// Configure static content
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/client/bower_components', express.static(__dirname + '/client/bower_components'));
app.use('/client/styles', express.static(__dirname + '/client/styles'));

// Require routes
require('./server/routes.js')(app);

// Listen
var port = constants.PORT || 8080;

app.listen(port, function() {
	console.log('Server running on ' + port);
});

// Export app
module.exports = app;