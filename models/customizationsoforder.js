'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomizationsOfOrder = sequelize.define('CustomizationsOfOrder', {
    order_id: DataTypes.INTEGER,
    customization_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CustomizationsOfOrder;
};