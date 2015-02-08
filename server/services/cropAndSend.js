var im = require("imagemagick");
var constants = require('../constants');

module.exports = function(res, url, width, height) {
	im.crop({
		srcPath: constants.IMAGES_FOLDER + url,
		width: width,
		height: height
	}, function(err, stdout, stderr) {
		res.contentType("image/jpeg");
		return res.end(stdout, 'binary');
	});
}