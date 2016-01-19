'use strict';

// Dependencies 
const Path = require('path');
const Hapi = require('hapi');
const Hoek = require('hoek');
const Routes = require('./app/routes');
const models = require('./models');

// New server Start
const server = new Hapi.Server();

const port = 8080;
const host = 'localhost';

server.connection({
  host: host,
  port: port
});

server.route(Routes);

models.sequelize.sync().then(function() {

  server.register(require('inert'), (err) => {
    if(err) {
      throw err;
    }

    

    server.start((err) => {
      if (err) throw err;
      console.log('Server running on port: ', server.info.uri);
    });

  });

});

