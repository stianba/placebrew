'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewTypeSchema = new Schema({
	name: String,
}, {
	collection: 'brewTypes'
});

module.exports = mongoose.model('BrewType', BrewTypeSchema);