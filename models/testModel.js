const { db, Sequelize } = require("../db");

const Test = db.define("test", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

module.exports = {
  Test
};
