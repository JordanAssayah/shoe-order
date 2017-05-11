'use strict';
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    administrator_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    parts: DataTypes.JSON
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Article.belongsTo(models.Administrator)
      }
    }
  });
  return Article;
};
