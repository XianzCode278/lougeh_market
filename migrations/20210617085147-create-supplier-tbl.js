'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Supplier_TBLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      SuppName: {
        type: Sequelize.STRING
      },
      SuppContact: {
        type: Sequelize.STRING
      },
      SuppAddress: {
        type: Sequelize.STRING
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
   

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Supplier_TBLs');
  }
};