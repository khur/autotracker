const api = require('./api/user');

module.exports = [

    {
        method: 'GET',
        path: '/users',
        handler: api.user.all
    },

    {
        method: 'GET',
        path: '/users/{id}',
        handler: api.user.find
    },

    {
        method: 'POST',
        path: '/users',
        handler: api.user.create
    }

];
