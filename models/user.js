module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    id         : {
        type          : DataTypes.INTEGER,
        primaryKey    : true,
        autoIncrement : true,
    },
    username   : {
      type      : DataTypes.STRING,
      allowNull : false,
      validate  : {
        notEmpty  : true,
      }
    },
    password   : {
      type     : DataTypes.STRING,
      allowNull : false,
      validate  : {
        notEmpty  : true,
        len       : [ 8, 20 ],
      }
    },
    firstname  : DataTypes.STRING,
    lastname   : DataTypes.STRING,
    email      : {
        type     : DataTypes.STRING,
        unique   : true,
        allowNull: false,
        validate : {
            isEmail  : true,
            notEmpty : true,
        }
    },
    birthdate  : {
        type     : DataTypes.DATEONLY,
        allowNull: false,
        validate : {
            isDate   : true,
            notEmpty : true,
        }
    },
    country    : DataTypes.STRING,
    state      : DataTypes.STRING,
    phone      : DataTypes.STRING,
    createdAt  : {
        type: DataTypes.DATE,
        field: 'created_at',
    },
    updatedAt  : {
        type: DataTypes.DATE,
        field: 'updated_at',
    },
  })
}
