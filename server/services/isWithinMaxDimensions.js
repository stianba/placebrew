module.exports = function (width, height){
	if (width < 4000 && height < 4000) {
		return true;
	}
	
	return false;
};