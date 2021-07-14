'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransPayment_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Customer_TBL, User_TBL,Order_TBL}) {
      // define association here
      this.belongsTo(Customer_TBL)
      this.belongsTo(User_TBL)
      this.hasMany(Order_TBL)
    }
  };
  TransPayment_TBL.init({
    TransDate:{
      type:  DataTypes.DATE,
    },
    TotalAmount:{
      type: DataTypes.FLOAT, 
    },
    TenderedAmount: {
      type:  DataTypes.FLOAT,
    },
    Change:{
      type:  DataTypes.FLOAT,
    },
    Trans_Status:{
      type: DataTypes.STRING,
    },
    CustomerTBLId:{
      type: DataTypes.INTEGER,

    },
    UserTBLId:{
      type: DataTypes.INTEGER,

    }
  }, {
    sequelize,
    modelName: 'TransPayment_TBL',
  });
  return TransPayment_TBL;
};