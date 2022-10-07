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
      hooks: {
        afterCreate: async () => {
          console.log('!!!!!!!!!!!!!!!!!!! Hook  !!!!!!!!!!!!!!!!!!!!!!!!')
          // Here we can add unconditional business logic
          const messageIn = {
            "message": "You have got some coins!"
          }
          return await message(sequelize).create(messageIn)
        } },      
    }
  )
};