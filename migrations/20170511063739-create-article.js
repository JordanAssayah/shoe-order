'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      administrator_id: {
        allowNull: false,
        references: {
          model: 'Administrators',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
          len: [ 2, 60 ],
        }
      },
      description: {
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
        }
      },
      base_url: {
        type: Sequelize.TEXT,
        validate: {
          notEmpty: true,
        }
      },
      price: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        }
      },
      parts: {
        type: Sequelize.JSON,
        validate: {
          notEmpty: true,
        }
      },
      sizes: {
        type: Sequelize.JSON,
        validate: {
          notEmpty: true,
        }
      },
      colors: {
        type: Sequelize.JSON,
        validate: {
          notEmpty: true,
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
    return queryInterface.dropTable('Articles');
  }
};
