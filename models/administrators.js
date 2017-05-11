'use strict';
module.exports = function(sequelize, DataTypes) {
  var Administrators = sequelize.define('Administrators', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Administrators.hasOne(models.Articles, { foreignKey: { name: 'administrator_id', allowNull: false } })
      }
    }
  });
  return Administrators;
};
