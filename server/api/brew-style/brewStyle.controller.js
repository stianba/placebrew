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
var BrewStyle = require('./brewStyle.model');
var handleError = require('../../services/errorHandling');

// Get list of brew styles
exports.index = function(req, res) {
	BrewStyle.find(function (err, brewStyles) {
		if(err) { return handleError(res, err); }
		return res.json(200, brewStyles);
	});
};

// Get a single brew style
exports.show = function(req, res) {
	BrewStyle.findById(req.params.id, function (err, brewStyle) {
		if(err) { return handleError(res, err); }
		if(!brewStyle) { return res.send(404); }
		return res.json(brewStyle);
	});
};