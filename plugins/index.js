import Inert from "@hapi/inert"
import Vision from "@hapi/vision"
import HapiSwagger from "hapi-swagger"


export default [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            info: {
                title: 'Test API Documentation',
                version: '1.0.0',
            }
        }
    }
]