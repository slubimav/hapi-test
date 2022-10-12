const pointService = require('../services/points');
const messageService = require('../services/messages');
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
            handler: async (request, h) => {
                return await pointService.getPoints()
        }}
    },
    // {
    //     method: 'POST',
    //     path: '/points',
    //     options: {
    //         validate: {
    //             payload: joi.object(pointSchema),
    //           },
    //         tags: ['api'],
    //         handler: async (request, h) => {
    //             const points = request.payload
    //             console.log('Add Points Act')
    //         return await pointService.addPoints(points)
    //     }}
    // },
    {
        method: 'POST',
        path: '/points',
        options: {
            validate: {
                payload: joi.object(pointSchema),
              },
            tags: ['api'],
            pre: [{ 
                method: function (request){ return request.payload.quantity > 100 ? messageService.createMessage({ message: 'Spasibo'}) : null },
                assign: 'm3'}],
            handler: async (request, h) => {
                const points = request.payload
                console.log('Add Points Act')
            return await pointService.addPointsAndMessage(points)
        }}
    }
]