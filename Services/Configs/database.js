const { Sequelize } = require("sequelize");

const infoDB = {
  username: "postgres",
  password: "0992941651",
  host: "localhost",
  port: "5432",
  database: "LION_GATE",
};

const connection = new Sequelize({
  username: infoDB.username,
  password: infoDB.password,
  host: infoDB.host,
  port: infoDB.port,
  database: infoDB.database,
  dialect: "postgres",
});

async () => {
  try {
    await connection.authenticate();
    console.log("Database connection successful");
  } catch (e) {
    console.error("Error authenticating:", e);
  }
};

module.exports = connection;
