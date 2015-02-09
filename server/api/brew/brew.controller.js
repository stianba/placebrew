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
var Brew = require('./brew.model');
var BrewStyle = require('../brew-style/brewStyle.model');
var BrewType = require('../brew-type/brewType.model');
var handleError = require('../../modules/error-handling');
var pourBrew = require('../../modules/pour-brew');

// Get list of brews
exports.index = function(req, res) {
	Brew.find(function (err, brews) {
		if(err) { return handleError(res, err); }
		return res.json(200, brews);
	});
};

// Get a single brew
exports.show = function(req, res) {
	Brew.findById(req.params.id, function (err, brew) {
		if(err) { return handleError(res, err); }
		if(!brew) { return res.send(404); }
		return res.json(brew);
	});
};

// Pour a perfectly sized brew based on Width/Height GET parameters (Or default size)
exports.pourByRatio = function(req, res) {
	pourBrew(res, Brew, 0, {}, req.params.width, req.params.height);
};

// Pour a specific brew
exports.pourBySpecifiedBrew = function(req, res) {
	pourBrew(res, Brew, 0, {name: req.params.brew.toLowerCase()}, req.params.width, req.params.height);
}

// Pour a random brew
exports.pourByRandomBrew = function(req, res) {
	pourBrew(res, Brew, 1, {}, req.params.width, req.params.height);
}

// Pour by brew type
exports.pourByBrewType = function(req, res) {
	BrewType.find({name: req.params.type.toLowerCase()}, function(err, brewType) {
		if(err) { return handleError(res, err); }
		if(!brewType.length) { return res.send(404); }

		pourBrew(res, Brew, 1, {brewType: brewType[0]._id}, req.params.width, req.params.height);
	});
}

// Pour by brew style
exports.pourByBrewStyle = function(req, res) {
	BrewStyle.find({name: req.params.style.toLowerCase()}, function(err, brewStyle) {
		if(err) { return handleError(res, err); }
		if(!brewStyle.length) { return res.send(404); }

		pourBrew(res, Brew, 0, {brewStyle: brewStyle[0]._id}, req.params.width, req.params.height);
	});
}