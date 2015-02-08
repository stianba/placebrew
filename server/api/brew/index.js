'use strict';

var express = require('express');
var controller = require('./brew.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/image/a/:width([0-9]+)?/:height([0-9]+)?', controller.pourByRatio);
router.get('/image/specific/:brew/:width([0-9]+)?/:height([0-9]+)?', controller.pourBySpecifiedBrew);
router.get('/image/random/:width([0-9]+)?/:height([0-9]+)?', controller.pourByRandomBrew);
router.get('/image/type/:type/:width([0-9]+)?/:height([0-9]+)?', controller.pourByBrewType);
router.get('/image/type/:type/:style/:width([0-9]+)?/:height([0-9]+)?', controller.pourByBrewStyle);

module.exports = router;