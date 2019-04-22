const express = require('express');
const router = express.Router();

const myCommentsList = require('../../../mocks/myComments.json')

router.get('/', (req, res) => res.json(myCommentsList));

module.exports = router;