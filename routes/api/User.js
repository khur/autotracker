var models = require('../../models');

exports.user = {
  all: function(request, reply) {
    models.User.findAll()
      .then(function(users) {
        reply(users).code(200);
      });
  },

  find: function(request, reply) {
    models.User.findOne({
      where: {id: encodeURIComponent(request.params.id)}
    })
    .then(function(user){
      reply(user).code(200);
    })
  },

  create: function(request, reply) {
    models.User
      .create(request.payload)
      .then(function(newuser) {
        reply(newuser).code(201);
      }).catch(function(error) {
        console.log(error)
      })
  },

  destroy: function(request, reply) {

    models.User.destroy({
      where: { 
        id: encodeURIComponent(request.params.id)
      }
    })

  }

};