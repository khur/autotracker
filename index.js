const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.register(require('inert'), (err) => {
  if(err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply){
      return reply.file('index.html');
    }
  });

  server.start((err) => {
    if (err) throw err;

    console.log('Server running on port: ', server.info.uri);
  });

});


