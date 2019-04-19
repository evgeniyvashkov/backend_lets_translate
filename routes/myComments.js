var express = require('express');
var router = express.Router();


var myCommentsList = require('../mocks/myComments.json')

router.get('/', function (req, res, next) {
    res.json(myCommentsList);
});

module.exports = router;