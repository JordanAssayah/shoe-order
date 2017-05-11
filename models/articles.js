'use strict';
module.exports = function(sequelize, DataTypes) {
  var Articles = sequelize.define('Articles', {
    administrator_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    parts: DataTypes.JSON
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Articles.belongsTo(models.Administrators, { as: 'administrator_id' })
      }
    }
  });
  return Articles;
};
