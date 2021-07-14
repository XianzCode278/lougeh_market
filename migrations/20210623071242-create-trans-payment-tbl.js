'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TransPayment_TBLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TransDate:{
        type:  Sequelize.DATE,
      },
      TotalAmount:{
        type: Sequelize.FLOAT,
      },
      TenderedAmount: {
        type:  Sequelize.FLOAT,
      },
      Change:{
        type:  Sequelize.FLOAT,
      },
      Trans_Status:{
        type: Sequelize.STRING,
      },
      CustomerTBLId:{
        type: Sequelize.INTEGER,
     
      },
      UserTBLId:{
        type: Sequelize.INTEGER,
    
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
    await queryInterface.dropTable('TransPayment_TBLs');
  }
};