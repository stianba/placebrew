var Deferred = require("promised-io/promise").Deferred;
var constants = require('../constants');
var isWithinMaxDimensions = require('./is-within-max-dimensions');

module.exports = function(model, queryAppendix, width, height) {
	var deferred = new Deferred();

	if(!width) {
		model.find(queryAppendix, function(err, brew) {
			if(err) {
				deferred.resolve({ code: 1, content: err });
			}

			if(!brew.length) {
				deferred.resolve({ code: 404 });
			}
			
			deferred.resolve({ code: 0, crop: 0, content: brew[0] });
		});
	} else {
		if(!height) {
			height = width;
		}
		
		if(!isWithinMaxDimensions(width, height)) {
			deferred.resolve({ code: 1, content: "Pouring over"  });
		}
		
		var ratio = width / height;
		var snitt = {};
		var pouredBrew = {};
		
		model.find({ aspectRatio: { $lte: ratio } })
			.find(queryAppendix).sort({ aspectRatio: -1 })
			.limit(1)
			.find(function(err, brew) {
				if(err) {
					deferred.resolve({ code: 1, content: err });
				}
			
				snitt = brew;
				
				model.find({ aspectRatio: { $gt: ratio } })
					.find(queryAppendix)
					.sort({ aspectRatio: 1 })
					.limit(1)
					.find(function(err, brew) {
						if(err) { 
							deferred.resolve({ code: 1, content: err });
						}
						
						if(snitt.length === 0){
							pouredBrew = brew[0];
						} else {
							pouredBrew = snitt[0];
						}
						
						if(!pouredBrew) {
							deferred.resolve({ code: 404 });
						} else {
							pouredBrew.width = width;
							pouredBrew.height = height;

							deferred.resolve({ code: 0, crop: 1, content: pouredBrew });
						}
				});
		});
	}

	return deferred.promise;
};