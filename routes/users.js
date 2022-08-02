export default [
    {
        method: 'GET',
        path: '/',
        options: {
        tags: ['api'],
        handler: (request, h) => {

            return 'Hello World!';
        }}
    }
]