const { getPoints, addPoints } = require('../repositories/points.js');
const joi = require('joi')

const pointSchema = {
    id: joi.string().guid({
        version: [ 'uuidv4' ] }),
    quantity: joi.number().integer(),
  }

module.exports = [
    {
        method: 'GET',
        path: '/points',
        options: {
            tags: ['api'],
            handler: (request, h) => {
                return getPoints();
        }}
    },
    {
        method: 'POST',
        path: '/points',
        options: {
            validate: {
                payload: joi.object(pointSchema),
              },
            tags: ['api'],
            handler: (request, h) => {
                const points = request.payload
                console.log('Add Points Act')
            return addPoints(points);
        }}
    }
]