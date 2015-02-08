'use strict';

var express = require('express');
var controller = require('./brew.controller');

var router = express.Router();

router.get('/:width([0-9]+)?/:height([0-9]+)?', controller.pourByRatio);

module.exports = router;