const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'my_database',
    'postgres12',
    'postgres', {
    host: 'db',
    dialect: 'postgres'
  });

  module.exports = {
    Sequelize,
    sequelize,
  }