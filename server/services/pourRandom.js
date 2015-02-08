var isWithinMaxDimensions = require('./isWithinMaxDimensions');
var cropAndSend = require('./cropAndSend');
var constants = require('../constants');

module.exports = function(model, queryAppendix, req, res) {
	var pouredBrew = {};
	
	model.find(queryAppendix, function(err, brews) {
		pouredBrew = brews[Math.floor(Math.random() * brews.length)];
		
		if(!req.params.width) {
			return res.sendfile(constants.IMAGES_FOLDER + pouredBrew.url);
		} else {
			if(!req.params.height) {
				req.params.height = req.params.width;
			}
			
			if(!isWithinMaxDimensions(req.params.width, req.params.height)) {
				return res.json({code: 202, message: "Pouring over"});
			}
			
			cropAndSend(res, pouredBrew.url, req.params.width, req.params.height);
		}
	});
};