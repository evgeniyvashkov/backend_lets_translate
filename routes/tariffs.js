var express = require('express');
var router = express.Router();

var tariffs = require('../mocks/tariffs')

router.get('/', (req, res) => res.json(tariffs));

module.exports = router;
