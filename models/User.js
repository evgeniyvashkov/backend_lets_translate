const { db, Sequelize } = require('../config/db');

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

    password : {
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

module.exports = {
    User,
    db
}