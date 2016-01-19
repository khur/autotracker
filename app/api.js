var models = require('../models');

exports.cars = {
  all: function(request, reply) {
    models.Car.findAll()
      .then(function(cars) {
        reply(cars).code(200);
      });
  },

  find: function(request, reply) {
    // console.log("params", request.params);
    // console.log("payload", request.payload);
    // console.log("encode", encodeURIComponent(request.params.id))
    models.Car.findOne({
      where: {id: encodeURIComponent(request.params.id)}
    })
    .then(function(car){
      reply(car).code(200);
    })
  },

  create: function(request, reply) {
    models.Car
      .build(request.payload)
      .save()
      .then(function(newCar) {
        reply(newCar).code(202);
      }).catch(function(error) {
        console.log(error)
      })
  }

};