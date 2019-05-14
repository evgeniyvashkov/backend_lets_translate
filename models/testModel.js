const { db, Sequelize } = require("../config/db");

const Test = db.define("test", {
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

module.exports = {
  Test
};
