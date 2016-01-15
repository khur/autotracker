'use strict';

// Dependencies 
const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Routes = require('./app/routes')

// New server Start
const server = new Hapi.Server();

const port = 8080;
const host = 'localhost';

server.connection({
  host: host,
  port: port
});

server.register(require('inert'), (err) => {
  if(err) {
    throw err;
  }

  server.route(Routes);

  server.start((err) => {
    if (err) throw err;
    console.log('Server running on port: ', server.info.uri);
  });

});


