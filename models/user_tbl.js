'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({login_TBL, Delivery_TBL, TransPayment_TBL}) {
      // define association here
      //  this.hasOne(Delivery_TBL, {foreignKey: 'Delivery_ID'})
      this.hasMany(Delivery_TBL)
      this.hasMany(login_TBL)
      this.hasOne(TransPayment_TBL)
    }
    // toJSON(){
    //   return { ...this.get(), id: undefined }
    // }
  };
  User_TBL.init({
    FName: DataTypes.STRING,
    UserName: DataTypes.STRING,
    PassWord: DataTypes.STRING,
    UserRole: DataTypes.STRING,
    UserStatus: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'User_TBL',
  });
  return User_TBL;
};