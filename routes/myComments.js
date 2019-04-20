var express = require('express');
var router = express.Router();

var myCommentsList = require('../mocks/myComments.json')

router.get('/', (req, res) => res.json(myCommentsList));

module.exports = router;