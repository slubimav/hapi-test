import Hapi from "@hapi/hapi"
import plugins from "./plugins/index.js"

const startServer = async () => {
    const server = Hapi.server(
        {
            port: 3000,
            host: 'localhost',
        }
    )

    await server.register(plugins);

    server.route({
        method: 'GET',
        path: '/',
        options: {
        tags: ['api'],
        handler: (request, h) => {

            return 'Hello World!';
        }}
    });

    await server.start()
    console.log('Server running on %s', server.info.uri)

}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

startServer()
