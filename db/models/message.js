const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'message',
    {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false
      },
      message: Sequelize.DataTypes.TEXT,
    },
    { paranoid: true },
  )
};