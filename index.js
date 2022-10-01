const hapi = require('@hapi/hapi')
const plugins = require('./plugins/index.js')


const dotenv = require('dotenv').config({ debug: true })
const { PORT } = process.env

const startServer = async () => {
    const server = hapi.server(
        {
            port: PORT,
            host: '0.0.0.0',
        }
    )

    await server.register(plugins)

    //server.route(routes);

    await server.start()
    console.log('Server running on %s', server.info.uri)

}
console.log('test1')
process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

startServer()
