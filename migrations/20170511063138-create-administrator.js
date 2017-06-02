'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Administrators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 2, 60 ],
        }
      },
      lastname: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 2, 60 ],
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          isEmail: true,
          len: [ 2, 120 ]
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 2, 100 ],
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Administrators');
  }
};
