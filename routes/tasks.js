const express = require('express');
const router = express.Router();

const tasksList = require('../mocks/tasks.json')

router.get('/', (req, res) => res.json(tasksList));

module.exports = router;