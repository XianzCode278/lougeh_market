'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User_TBLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FName: {
        type: Sequelize.STRING
      },
      UserName: {
        type: Sequelize.STRING
      },
      PassWord: {
        type: Sequelize.STRING
      },
      UserRole: {
        type: Sequelize.STRING
      }, 
      UserStatus: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('User_TBLs');
  }
};