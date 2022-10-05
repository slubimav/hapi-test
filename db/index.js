  const db = require('./models/index');

  db.sequelize
    .sync({ force: true})
    .then(() => console.log('Created!'))
    .catch((error) => console.log(error))