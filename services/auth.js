const { User, db } = require('../models/User');
const jwt = require('jsonwebtoken');
const { JWT: { live, secret } } = require('../config/auth');

//token generation
const geterationToken = (id) => {
    const token = jwt.sign({
        id,
        exp: Math.floor(Date.now() / 1000) + parseInt(live)
    }, secret);

    return {
        "token": "bearer" + token
    }
};

//user registration
const signUp = async (payload) => {
    console.log('start sing up');
    const { email, userName, cardNumber, password } = payload;

    try {
        const user = await User.findOne({ where: { email } });

        if (user) return { "message": "That email is alreade taken" }

        const newUser = await User.create({ email, userName, cardNumber, password: User.generateHash(password) })

        return { user: newUser, ...geterationToken(newUser.id) }
    }

    catch (err) {
        return { "seccess": false, "message": "Registration failed" }
    }
}

module.exports = {
    signUp
}