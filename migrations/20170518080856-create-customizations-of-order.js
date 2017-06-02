'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CustomizationsOfOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id'
        },
        validate: {
          notEmpty: true,
        }
      },
      customization_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Customizations',
          key: 'id'
        },
        validate: {
          notEmpty: true,
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
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
    return queryInterface.dropTable('CustomizationsOfOrders');
  }
};
