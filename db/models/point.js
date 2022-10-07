const { Sequelize, DataTypes } = require('sequelize');
const messageRep = require('../../repositories/messages')
const message = require('./message')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
    'point',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      quantity: Sequelize.INTEGER
    },
    { paranoid: true,
    }
  )
};