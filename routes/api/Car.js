var models = require('../../models');

exports.car = {
  all: function(request, reply) {
    models.Car.findAll()
      .then(function(cars) {
        reply(cars).code(200);
      });
  },

  find: function(request, reply) {
    models.Car.findOne({
      where: {id: encodeURIComponent(request.params.id)}
    })
    .then(function(car){
      reply(car).code(200);
    })
  },

  create: function(request, reply) {
    models.Car
      .create(request.payload)
      .then(function(newCar) {
        reply(newCar).code(201);
      }).catch(function(error) {
        console.log(error)
      })
  },

  destroy: function(request, reply) {

    models.Car.destroy({
      where: { 
        id: encodeURIComponent(request.params.id)
      }
    })

  }

};