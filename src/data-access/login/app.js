//const { connects,dotenv } = require("../app")
const { connects,dotenv } = require("../app");


const query = require("./query")

const loginDB = query({ connects, dotenv })
//const supplierDB = query({ connects,dotenv });

module.exports = loginDB