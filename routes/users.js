module.exports = [
    {
        method: 'GET',
        path: '/',
        options: {
        tags: ['api'],
        handler: (request, h) => {

            return 'Hello One Test 22 User!';
        }}
    },
    {
        method: 'GET',
        path: '/user',
        options: {
        tags: ['api', 'protected'],
        handler: (request, h) => {

            return 'Protected Root!';
        }}
    }
]