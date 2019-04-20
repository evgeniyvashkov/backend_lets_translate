var express = require('express');
var router = express.Router();

var newCommentsList = require('../mocks/newComments.json')

router.get('/', (req, res) => res.json(newCommentsList));

module.exports = router;