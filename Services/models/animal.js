const { DataTypes } = require("sequelize");
const connections = require("../Configs/database");

const Animal = connections.define("Animal", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nameAnimal: { type: DataTypes.STRING },
  species: { type: DataTypes.STRING },
  typeof: { type: DataTypes.STRING },
  showDuration: { type: DataTypes.TIME },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

// Animal.sync({ alter: true });

module.exports = Animal;
