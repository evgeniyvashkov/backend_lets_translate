const express = require('express');
const router = express.Router();

const checkboxThemesField = require('../mocks/thematicCheckboxField.json');

router.get('/', (req,res) => res.json(checkboxThemesField))

module.exports = router;