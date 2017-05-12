'use strict';
module.exports = function(sequelize, DataTypes) {
  var Administrator = sequelize.define('Administrator', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Administrator.hasOne(models.Article, { foreignKey: { name: 'administrator_id' } })
      }
    }
  });
  return Administrator;
};
