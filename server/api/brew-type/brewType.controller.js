/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var BrewType = require('./brewType.model');
var handleError = require('../../services/errorHandling');

// Get list of brew types
exports.index = function(req, res) {
	BrewType.find(function (err, brewTypes) {
		if(err) { return handleError(res, err); }
		return res.json(200, brewTypes);
	});
};

// Get a single brew type
exports.show = function(req, res) {
	BrewType.findById(req.params.id, function (err, brewType) {
		if(err) { return handleError(res, err); }
		if(!brewType) { return res.send(404); }
		return res.json(brewType);
	});
};