const pointRepository = require('../repositories/points');

module.exports = {
    async getPoints() { 
        return await pointRepository.getPoints()
    },
    async addPoints(points) {
        return `Body to create point:\n${ await pointRepository.addPoints(points) }`
      }
}