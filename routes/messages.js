const messageService = require('../services/messages');
const joi = require('joi')

const messageSchema = {
    id: joi.string().guid({
        version: [ 'uuidv4' ] }),
    message: joi.string(),
  }

module.exports = [
    {
        method: 'GET',
        path: '/messages',
        options: {
            tags: ['api'],
            handler: async (request, h) => {
                return await messageService.getMeassage()
        }}
    },
    {
        method: 'POST',
        path: '/messages',
        options: {
            validate: {
                payload: joi.object(messageSchema),
              },
            tags: ['api'],
            handler: async (request, h) => {
                const message = request.payload
            return await messageService.createMessage(message)
        }}
    },
    {
        method: 'GET',
        path: '/user',
        options: {
        tags: ['api', 'protected'],
        handler: (request, h) => {

            return 'Protected Root!';
        }}
    }
]