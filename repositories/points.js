const db = require('../db/models/index');

function logSQLstatementAndDuration(sql, queryObject) {
    console.log('\033[33m%s\033[32m', sql, queryObject)
  }

module.exports = {
    getPoints: async() => {
        return await db.point.findAll({
            benchmark: true,
            logging: (sql, queryObject) => {
              logSQLstatementAndDuration(sql, queryObject)
            }})
    },
    addPoints: async (points) => {
        return `Add Points:\n ${ await db.point.create(points, {
            benchmark: true,
            logging: (sql, queryObject) => {
              logSQLstatementAndDuration(sql, queryObject)
            }}) }`
      }
}