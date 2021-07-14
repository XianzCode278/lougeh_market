'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Delivery_TBLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DateDelivered: {
        type: Sequelize.DATE
      },
      isStatus: {
        type: Sequelize.STRING,
      },
      UserTBLId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      SupplierTBLId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Delivery_TBLs');
  }
};