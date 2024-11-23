const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // bookRentaldb
  process.env.DB_USER, // azarias
  process.env.DB_PASSWORD, // Ja30104015*
  {
    host: process.env.DB_HOST, // localhost
    dialect: process.env.DB_DIALECT, // mysql
    logging: false, // Desativa logs do Sequelize
  }
);

module.exports = sequelize;
