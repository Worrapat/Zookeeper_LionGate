const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const Roundshows = connections.define("Roundshows", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  roomNo: { type: DataTypes.STRING },
  nameAnimal: { type: DataTypes.STRING },
  timeShow: { type: DataTypes.DATE },
  roomNo: { type: DataTypes.STRING },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

// Roundshows.sync({ alter: true });

module.exports = Roundshows;
