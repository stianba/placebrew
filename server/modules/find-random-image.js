var Deferred = require("promised-io/promise").Deferred;
var constants = require('../constants');
var isWithinMaxDimensions = require('./is-within-max-dimensions');

module.exports = function(model, queryAppendix, width, height) {
	var deferred = new Deferred();
	var pouredBrew = {};
	
	model.find(queryAppendix, function(err, brews) {
		pouredBrew = brews[Math.floor(Math.random() * brews.length)];
		
		if(!width) {
			deferred.resolve({ code: 0, crop: 0, content: pouredBrew });
		} else {
			if(!height) {
				height = width;
			}
			
			if(!isWithinMaxDimensions(height, width)) {
				deferred.resolve({ code: 1, content: 0, content: "Pouring over" });
			}
		}
	});

	return deferred.promise;
};