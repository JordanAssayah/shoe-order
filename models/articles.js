'use strict';
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    administrator_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    parts: DataTypes.JSON,
    sizes: DataTypes.JSON,
    colors: DataTypes.JSON,
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
