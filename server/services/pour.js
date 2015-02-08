var isWithinMaxDimensions = require('./isWithinMaxDimensions');
var cropAndSend = require('./cropAndSend');
var constants = require('../constants');

module.exports = function(model, queryAppendix, req, res) {
	if(!req.params.width) {
		model.find(queryAppendix, function(err, brew) {
			if(err) { return handleError(res, err); }
			
			if(!brew.length) {
				return res.send(404);
			}
			
			return res.sendfile(constants.IMAGES_FOLDER + brew[0].url);
		});
	} else {
		if(!req.params.height) {
			req.params.height = req.params.width;
		}
		
		if(!isWithinMaxDimensions(req.params.width, req.params.height)) {
			return res.json({code: 202, message: "Pouring over"});
		}
		
		var ratio = req.params.width / req.params.height;
		var snitt = {};
		var pouredBrew = {};
		
		model.find({aspectRatio: {$lte: ratio}}).find(queryAppendix).sort({aspectRatio: -1}).limit(1).find(function(err, brew) {
			if(err) { return handleError(res, err); }
			
			snitt = brew;
			
			model.find({aspectRatio: {$gt: ratio}}).find(queryAppendix).sort({aspectRatio: 1}).limit(1).find(function(err, brew) {
				if(err) { return handleError(res, err); }
				
				if(snitt.length === 0){
					pouredBrew = brew[0];
				} else {
					pouredBrew = snitt[0];
				}
				
				if(!pouredBrew) {
					return res.send(404);
				}
				
				cropAndSend(res, pouredBrew.url, req.params.width, req.params.height);
			});
		});
	}
};