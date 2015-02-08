'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('home');
});

router.get('/brews', function(req, res) {
	res.render('brews');
});

module.exports = router;