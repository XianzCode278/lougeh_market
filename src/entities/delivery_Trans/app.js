const make_del_Transaction = require("./make_delivery_Trans");
const patch_delivery_Tran = require("./patch_delivery_Trans");

const make_del_Transactions = make_del_Transaction()
const patch_delivery_Trans = patch_delivery_Tran()

const services = Object.freeze({ make_del_Transactions, patch_delivery_Trans })

module.exports = services
module.exports = { make_del_Transactions, patch_delivery_Trans}