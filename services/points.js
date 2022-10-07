const pointRepository = require('../repositories/points');
const messageRepository = require('../repositories/messages');

module.exports = {
    async getPoints() { 
        return await pointRepository.getPoints()
    },
    async addPoints(points) {
        return `Body to create point:\n${ await pointRepository.addPoints(points) }`
      },
    async addPointsAndMessage(points) { 
        
        // Implement some buseness logic here
        if (Number(points.quantity) > 1000) {
            const message = {  message: `More than 1000 points added.` }
            await messageRepository.createMessage(message)
        }

        return await pointRepository.addPoints(points)
    },
}