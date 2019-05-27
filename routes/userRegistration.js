const express = require('express');
const router = express.Router();
const { User, db } = require('../models/User');

router.get('/', (req, res) => {
    res.send(req.body)
})

router.post('/', (req, res) => {
    const {
        email, userName, cardNumber, password, repeatPassword
    } = req.body;

    User.findOne({ where: { email } })
        .then(user => {
            return user ? res.sendStatus(400) : 
            () => {
                User.create({ email, userName, cardNumber, password })
                res.sendStatus(200)
            };
        })
})

module.exports = router;