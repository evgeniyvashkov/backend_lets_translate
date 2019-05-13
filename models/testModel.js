const { db, Sequelize } = require("../db");

const Test = db.define("test", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

const User = db.define("user", {
  email: Sequelize.STRING,
  userName: Sequelize.TEXT,
  cardNumber: Sequelize.STRING,
  password: Sequelize.STRING
});


module.exports = {
  Test,
  User
};
