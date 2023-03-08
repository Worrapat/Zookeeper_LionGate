const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const animals = connections.define("", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nameAnimal: { type: DataTypes.STRING },
  species: { type: DataTypes.STRING },
  showDuration: { type: DataTypes.TIME },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

// animals.sync({ alter: true });

module.exports = animals;
