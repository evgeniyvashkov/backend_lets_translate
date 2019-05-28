const express = require('express');
const router = express.Router();
const { User, db } = require('../models/User');
const { signUp } = require('../services/auth')

router.get('/', (req, res) => {
    res.send('123');
})

router.post('/', async (req, res) => {
   
    const response = await signUp(req.body);
    console.log('response!!!',response);
    res.json(response)
})

module.exports = router;