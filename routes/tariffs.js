var express = require('express');
var router = express.Router();

var tariffs = require('../mocks/tariffs')

router.get('/', function (req, res, next) {
    res.json(tariffs);
});

module.exports = router;
