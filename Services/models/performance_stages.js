const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const performancestages = connections.define("performancestages", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  roomNumber: { type: DataTypes.STRING(2) },
  sumSeat: { type: DataTypes.STRING(4) },
  price: { type: DataTypes.STRING(4) },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

// performancestages.sync({ alter: true });

module.exports = performancestages;
