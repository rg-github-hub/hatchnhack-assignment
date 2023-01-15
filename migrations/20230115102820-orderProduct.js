'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.createTable('order_products', {
      orderId: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: { model: 'orders', key: 'orderId' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      productName: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: { model: 'products', key: 'name' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      deliveryTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_products');
  }
};