'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewSchema = new Schema({
	name: String,
	url: String,
	license: String,
	photographer: String,
	aspectRatio: Number,
	brewType: Schema.Types.ObjectId,
	brewStyle: Schema.Types.ObjectId
}, {
	collection: 'brews'
});

module.exports = mongoose.model('Brew', BrewSchema);