'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    vin: DataTypes.INTEGER,
    oilType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Car.belongsTo(models.User);
      }
    }
  });
  return Car;
};