const { db } = require("../utils/database");
const { DataTypes } = require("sequelize");

const Operation = db.define("operation", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  opName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  opType: {
    type: DataTypes.ENUM,
    values: ["ingreso", "egreso"],
    allowNull: false,
  },

  opCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = { Operation };
