'use strict';

module.exports = function(app) {
	// Client routes
	app.use('/', require('../client/client'));
	
	// API routes
	app.use('/brew', require('./api/brew'));
	app.use('/brew-type/', require('./api/brew-type'));
	app.use('/brew-style/', require('./api/brew-style'));
	
	// Use root shortcut for base Width x Height ratio functionality
	app.use('/', require('./api/brew/shortcut.js'));
};