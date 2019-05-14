const bcrypt = require('bcrypt');

const { db, Sequelize } = require("../config/db");

const User = db.define("user", {
    email: Sequelize.STRING,
    userName: Sequelize.TEXT,
    cardNumber: Sequelize.STRING,
    password: Sequelize.STRING,

    generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    validPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }

});

export default User;