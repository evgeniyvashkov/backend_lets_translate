// const bcrypt = require('bcrypt');

// // const { db, Sequelize } = require("../config/db");

// const Sequelize = require("sequelize");

// const db = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres"
//   }
// );


// const User = db.define("user", {
//     email: Sequelize.STRING,
//     userName: Sequelize.TEXT,
//     cardNumber: Sequelize.STRING,
//     password: Sequelize.STRING,

//     generateHash(password) {
//         return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//     },

//     validPassword(password) {
//         return bcrypt.compareSync(password, this.password)
//     }

// });

// module.exports={ User };