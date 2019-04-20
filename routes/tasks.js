var express = require('express');
var router = express.Router();

var tasksList = require('../mocks/tasks.json')

router.get('/', (req, res) => res.json(tasksList));

module.exports = router;
