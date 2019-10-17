const Sequelize = require("sequelize");

const sequelize = new Sequelize("practice", "node_user", "node_user", {
  dialect: "mysql",
  host: "localhost",
  port: 3309
});

module.exports = sequelize;
