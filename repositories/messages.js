const db = require('../db/models/index');

module.exports = {
    getMessages: async() => {
        return await db.message.findAll()
    },
    createMessage: async (message) => {
        return `Created Messages Data:\n${ await db.message.create(message) }`
      }
}