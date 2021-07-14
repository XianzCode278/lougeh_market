'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Delivery_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_TBL,Transaction_DeliveryTBL,Supplier_TBL }) {
      // this.hasMany(Product_TBL, {foreignKey: 'Product_ID'})
     // this.hasOne( User_TBL, {foreignKey: 'User_ID'})
     this.belongsTo(User_TBL)
     this.hasMany(Transaction_DeliveryTBL)
     this.belongsTo(Supplier_TBL)
  
    }

  };
  Delivery_TBL.init({
    DateDelivered:{
      type: DataTypes.DATE,
    },
    isStatus: {
      type: DataTypes.STRING,  
    },
    UserTBLId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SupplierTBLId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

   
  }, {
    sequelize,
    modelName: 'Delivery_TBL',
  });
  return Delivery_TBL;
};