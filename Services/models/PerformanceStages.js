const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const Performancestages = connections.define("Performancestages", {
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

// Performancestages.sync({ alter: true });

module.exports = Performancestages;
