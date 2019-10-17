const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "node_user",
  database: "practice",
  password: "node_user",
  port: 3309
});

module.exports = pool.promise();
