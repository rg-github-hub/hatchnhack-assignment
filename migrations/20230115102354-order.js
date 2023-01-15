'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      orderId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      customerName: {
        type: Sequelize.STRING
      },
      customerEmail: {
        type: Sequelize.STRING
      },
      customerPhone: {
        type: Sequelize.STRING
      },
      finalPrice: {
        type: Sequelize.DECIMAL
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

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('orders');
  }
};