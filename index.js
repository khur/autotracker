const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});


server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply){
    return reply("hello world");
  }
});


server.start((err) => {
  if(err) throw err;

  console.log('Server running on port: ', server.info.uri);
});