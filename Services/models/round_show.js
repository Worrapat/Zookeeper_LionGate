const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const roundshows = connections.define("roundshows", {
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

// roundshows.sync({ alter: true });

module.exports = roundshows;
