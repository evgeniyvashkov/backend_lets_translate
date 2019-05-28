const express = require('express');
const router = express.Router();
const { signUp } = require('../services/auth')

router.post('/', async(req, res) => {
    const response = await signUp(req.body);
    console.log('response', response)
    res.json(response)
})

module.exports = router;