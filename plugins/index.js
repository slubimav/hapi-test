const hapiswagger = require('hapi-swagger')
const inert = require('@hapi/inert')
const vision = require('@hapi/vision')
const deployPlugin = require('./protected.js')
const routes = require('../routes/index.js')

module.exports = [
    {
      plugin: hapiswagger,
      options: {
        info: {
          title: 'API Documentation',
          version: '2.6',
        },
      },
    },
    {
        plugin: inert,
    },
    {
        plugin: vision,
    },
    {
        plugin: deployPlugin,
        options: routes ,
      }
  ]
  