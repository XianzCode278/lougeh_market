'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({TransPayment_TBL, Product_TBL}) {
      // define association here
      this.belongsTo(TransPayment_TBL)
      this.belongsTo(Product_TBL)
    }
  };
  Order_TBL.init({
    ProductTBLId:{
      type:  DataTypes.INTEGER,
      allowNull:false
    },
    Quantity: {
     type: DataTypes.INTEGER,
    },
    TransPaymentTBLId:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order_TBL',
  });
  return Order_TBL;
};