'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Customer_TBL.init({
    CusName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    CusAddress:{
      type:DataTypes.STRING,
      allowNull: false
    },
    CusContact: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Customer_TBL',
  });
  return Customer_TBL;
};