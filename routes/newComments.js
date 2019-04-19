var express = require('express');
var router = express.Router();

var newCommentsList = require('../mocks/newComments.json')

router.get('/', function (req, res, next) {
    res.json(newCommentsList);
});

module.exports = router;