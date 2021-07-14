'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction_DeliveryTBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Delivery_TBL,  Product_TBL }) {
      // define association here
       this.belongsTo(Delivery_TBL)
       this.belongsTo(Product_TBL)
     //  this.belongsTo(Supplier_TBL)
      
      // this.hasMany(Order_TBL)
    }
  };
  Transaction_DeliveryTBL.init({
    DeliveryTBLId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProductTBLId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
 

  }, {
    sequelize,
    modelName: 'Transaction_DeliveryTBL',
  });
  return Transaction_DeliveryTBL;
};