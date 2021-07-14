'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Delivery_TBL}) {
   //  this.hasMany(Product_TBL)
    this.hasMany(Delivery_TBL)
    }
   
  };
  Supplier_TBL.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    SuppName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    SuppContact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    SuppAddress:{
       type:DataTypes.STRING,
       allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'Supplier_TBL',
  });
  return Supplier_TBL;
};