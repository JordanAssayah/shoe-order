'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
          len: [ 0, 150 ],
        }
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 300 ],
        }
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 100 ],
        }
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: [ 0, 255 ],
        }
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 255 ],
        }
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 50 ],
        }
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 60 ],
        }
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 60 ],
        }
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 0, 40 ],
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Addresses');
  }
};
