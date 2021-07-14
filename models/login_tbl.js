'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class login_TBL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User_TBL}) {
      // define association here
      this.belongsTo(User_TBL)
    }
  };
  login_TBL.init({
    loginDate: DataTypes.DATE,
    UserTBLId: DataTypes.INTEGER,
    JWToken: DataTypes.STRING,
    UserTBLId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'login_TBL',
  });
  return login_TBL;
};