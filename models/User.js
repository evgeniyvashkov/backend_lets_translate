const { db, Sequelize } = require('../config/db');
const bcrypt = require('bcrypt');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    email: {
        type: Sequelize.TEXT,
        notEmpty: true,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.CHAR
    },

    userName: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    cardNumber: {
        type: Sequelize.STRING,
        notEmpty: true
    }
});

User.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = {
    User,
    db
}