const { message } = require('../db/models/index');

module.exports = {
    getMessages: async() => {
        return await message.findAll()
    },
    createMessage: async (messageIn) => {
        return `Created Messages Data:\n${ await message.create(messageIn) }`
      }
}