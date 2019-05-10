const express = require('express');
const router = express.Router();

const rootPage = (req, res) => res.send('Weclom to my server on port 3001! It works and it fine!');

router.get('/', rootPage);

module.exports = router;