const api = require('./api');

module.exports = [

    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.file('index.html');
        }
    },

    {
        method: 'GET',
        path: '/cars',
        handler: api.cars.all
    },

    {
        method: 'GET',
        path: '/cars/{id}',
        handler: api.cars.find
    },

    {
        method: 'POST',
        path: '/cars',
        handler: api.cars.create
    }

];
