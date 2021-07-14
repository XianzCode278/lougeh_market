//const { connects,dotenv } = require("../app")
const { connects,dotenv } = require("../app");


const query = require("./query")

const del_TransactionDB = query({ connects, dotenv })
//const supplierDB = query({ connects,dotenv });

module.exports = del_TransactionDB