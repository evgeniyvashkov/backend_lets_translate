const express = require('express');
const router = express.Router();

const tariffs = require('../mocks/tariffs')

router.get('/', (req, res) => res.json(tariffs));

module.exports = router;
