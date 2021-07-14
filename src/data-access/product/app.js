//const { connects,dotenv } = require("../app")
const { connects,dotenv } = require("../app");


const query = require("./query")

const productDB = query({ connects, dotenv })
//const supplierDB = query({ connects,dotenv });

module.exports = productDB