'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customization = sequelize.define('Customization', {
    article_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    customization: DataTypes.JSON,
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Customization;
};
