const { connects,dotenv } = require("../app");
//const { Employee } = require('../../../models')

//const models = require("../sequelize/models");
// ######
const query = require("./query");
// -----------------------------------------------------------------
const supplierDB = query({ connects,dotenv });
//const employeesDb = query({Employee ,dotenv,jwt });
// --------------------------------------------------
//console.log("DATA ACCESS EMPLOYEE APP.JS")
module.exports = supplierDB;