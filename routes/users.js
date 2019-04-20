var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('users page'));

module.exports = router;
