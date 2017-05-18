'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [ 8, 20 ],
        }
      },
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
              isEmail: true,
              notEmpty: true,
          }
      },
      birthdate: {
          type: Sequelize.DATEONLY,
          allowNull: false,
          validate: {
              isDate: true,
              notEmpty: true,
          }
      },
      current_address: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Customers');
  }
};
