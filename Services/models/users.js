const { DataTypes } = require("sequelize");
const connection = require("../configs/database");

const users = connection.define("User", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(12),
    allowNull: false,
    unique: true,
  },
  userType: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

// users.sync({ alter: true });

module.exports = users;
