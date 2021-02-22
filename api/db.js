const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("passport", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
