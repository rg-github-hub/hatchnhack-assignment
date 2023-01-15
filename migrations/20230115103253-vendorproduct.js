'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendor_products', {
      vendor_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'vendors', key: 'id' },
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
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vendor_products');
  }
};
