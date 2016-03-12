const userRoutes = require('./userRoutes');
const carRoutes = require('./carRoutes');

const routes = {
    index:     {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            return reply.file('index.html');
        }
    },
    userRoutes: userRoutes,
    carRoutes: carRoutes,
};

module.exports = routes;