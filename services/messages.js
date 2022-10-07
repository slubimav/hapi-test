const messageRepository = require('../repositories/messages');

module.exports = {
    async getMeassage() { 
        return await messageRepository.getMessages()
    },
    async createMessage(message) {
        return `Body to create message:\n${ await messageRepository.createMessage(message) }`
      }
}