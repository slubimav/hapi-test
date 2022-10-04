const hapi = require('@hapi/hapi')
const plugins = require('./plugins/index.js')
const db = require('./db/index.js')

const { PORT } = process.env

const startServer = async () => {
    const server = hapi.server(
        {
            port: PORT,
            host: '0.0.0.0',
        }
    )

    try {
        await db.sequelize.authenticate();
        console.log('DB connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

    await server.register(plugins)

    //server.route(routes);

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

startServer()
