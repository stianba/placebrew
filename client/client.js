'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.sendfile('./client/index.html');
});

router.get('/brews', function(req, res) {
	res.sendfile('./client/brews.html');
});

module.exports = router;