'use strict';

// Dependencies
const Path      = require('path');
const Hapi      = require('hapi');
const Hoek      = require('hoek');
const Routes    = require('./routes/index');
const models    = require('./models');

// New server Start
const server    = new Hapi.Server();

const port      = 8080;
const host      = 'localhost';

server.connection({
  host: host,
  port: port
});

// Taking from the route/index file
for (let route in Routes) {
  server.route(Routes[route]);  
}


server.register(require('inert'), (err) => {
  if(err) {
    throw err;
  }

  models.sequelize.sync().then(function() {
    server.start((err) => {
      if (err) throw err;
      console.log('Server running on port: ', server.info.uri);
    });
  });

});
