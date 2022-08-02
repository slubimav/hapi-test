import Hapi from "@hapi/hapi"
import Inert from "@hapi/inert"
import Vision from "@hapi/vision"
import HapiSwagger from "hapi-swagger"

const startServer = async () => {
    const server = Hapi.server(
        {
            port: 3000,
            host: 'localhost',
        }
    )

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',
                version: '1.0.0',
            },
        };

    await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            }
        ]);

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
