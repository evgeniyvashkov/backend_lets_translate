const Sequelize = require("sequelize");

const DB_NAME = 'lets_translate_db';
const DB_USER = 'postgres';
const DB_PASSWORD = '123456';
const DB_HOST = 'localhost';

//connection to DB
const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

module.exports = {
  db,
  Sequelize
};
