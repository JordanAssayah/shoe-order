'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    const tableOptions = {
      id        : {
        type          : Sequelize.INTEGER,
        primaryKey    : true,
        autoIncrement : true,
      },
      username  : {
        type      : Sequelize.STRING,
        allowNull : false,
        validate  : {
          notEmpty  : true,
        }
      },
      password  : {
        type     : Sequelize.STRING,
        allowNull : false,
        validate  : {
          notEmpty  : true,
          len       : [ 8, 20 ],
        }
      },
      firstname : Sequelize.STRING,
      lastname  : Sequelize.STRING,
      email     : {
          type     : Sequelize.STRING,
          unique   : true,
          allowNull: false,
          validate : { 
              isEmail  : true,
              notEmpty : true,
          }
      },
      birthdate : { 
          type     : Sequelize.DATEONLY,
          allowNull: false,
          validate : { 
              isDate   : true,
              notEmpty : true,
          }
      },
      country   : Sequelize.STRING,
      state     : Sequelize.STRING,
      phone     : Sequelize.STRING,
      createdAt : {
          type: Sequelize.DATE,
          field: 'created_at',
      },
      updatedAt : {
          type: Sequelize.DATE,
          field: 'updated_at',
      },
    }

    return queryInterface.createTable('users', tableOptions, { timestamps: true })    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
};
