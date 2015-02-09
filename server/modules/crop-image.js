var im = require("imagemagick");
var constants = require('../constants');
var Deferred = require("promised-io/promise").Deferred;

module.exports = function(imageObj) {
	var deferred = new Deferred();
	im.crop({
		srcPath: constants.IMAGES_FOLDER + imageObj.url,
		width: imageObj.width,
		height: imageObj.height
	}, function(err, stdout, stderr) {
		deferred.resolve({ code: 0, crop: 1, content: stdout });
	});

	return deferred.promise;
}