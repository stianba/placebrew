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
var handleError = require('../../services/errorHandling');
var pour = require('../../services/pour');
var pourRandom = require('../../services/pourRandom');

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
	pour(Brew, {}, req, res);
};

// Pour a specific brew
exports.pourBySpecifiedBrew = function(req, res) {
	pour(Brew, {url: req.params.brew + '.jpg'}, req, res);
}

// Pour a random brew
exports.pourByRandomBrew = function(req, res) {
	pourRandom(Brew, '', req, res);
}

// Pour by brew type
exports.pourByBrewType = function(req, res) {
	BrewType.find({name: req.params.type}, function(err, brewType) {
		if(err) { return handleError(res, err); }
		if(!brewType.length) { return res.send(404); }
		
		pourRandom(Brew, {brewType: brewType[0]._id}, req, res);
	});
}

// Pour by brew style
exports.pourByBrewStyle = function(req, res) {
	BrewStyle.find({name: req.params.style}, function(err, brewStyle) {
		if(err) { return handleError(res, err); }
		if(!brewStyle.length) { return res.send(404); }
		
		pour(Brew, {brewStyle: brewStyle[0]._id}, req, res);
	});
}