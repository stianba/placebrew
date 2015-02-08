'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewStyleSchema = new Schema({
	name: String,
	brewType: Schema.Types.ObjectId
}, {
	collection: 'brewStyles'
});

module.exports = mongoose.model('brewStyle', BrewStyleSchema);