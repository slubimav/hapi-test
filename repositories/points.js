const db = require('../db/models/index');

module.exports = {
    getPoints: async() => {
        return await db.point.findAll()
    },
    addPoints: async (points) => {
        return `Add Points:\n ${ await db.point.create(points) }`
      }
}