const express = require('express');
const router = express.Router();

const newCommentsList = require('../../../mocks/newComments.json')

router.get('/', (req, res) => res.json(newCommentsList));

module.exports = router;