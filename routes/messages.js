const { getMessages, createMessage } = require('../repositories/messages.js');
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
            handler: (request, h) => {
                return getMessages();
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
            handler: (request, h) => {
                const message = request.payload
            return createMessage(message);
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