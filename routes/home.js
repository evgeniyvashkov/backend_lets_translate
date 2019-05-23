const express = require('express');
const router = express.Router();

const rootPage = (req, res) => res.send('server is working');

router.get('/', rootPage);

module.exports = router;