var express = require('express');
var router = express.Router();

var tasksList = require('../mocks/tasks.json')

router.get('/', function (req, res, next) {
    res.json(tasksList);
});

module.exports = router;
