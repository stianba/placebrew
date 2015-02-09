var constants = require('../constants');
var findImage = require('./find-image');
var findRandomImage = require('./find-random-image');
var cropImage = require('./crop-image');

module.exports = function(res, model, random, queryAppendix, width, height) {
	var findFunction = findImage;

	if(random) {
		findFunction = findRandomImage;
	}

	findFunction(model, queryAppendix, width, height)
	.then(function(data) {
		if(data.code === 0) {
			if(data.crop) {
				cropImage(data.content)
				.then(function(data) {
					res.contentType("image/jpeg");
					return res.end(data.content, 'binary');
				});
			} else {
				return res.sendfile(constants.IMAGES_FOLDER + data.content.url);
			}
		} else if (data.code === 404) {
			return res.send(data.code);
		} else {
			return res.json(data.content);
		}
	});
}