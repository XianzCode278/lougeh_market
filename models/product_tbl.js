'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Transaction_DeliveryTBL, Order_TBL}) {
      // define association here
  
     this.hasMany(Transaction_DeliveryTBL)
     this.hasMany(Order_TBL)

  
    }
  };
  Product_TBL.init({
    
    ProdDesc: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Product_TBL',
  });
  return Product_TBL;
};