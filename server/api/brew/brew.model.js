'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewSchema = new Schema({
	url: String,
	aspectRatio: Number,
	brewType: Schema.Types.ObjectId,
	brewStyle: Schema.Types.ObjectId
}, {
	collection: 'brews'
});

module.exports = mongoose.model('Brew', BrewSchema);