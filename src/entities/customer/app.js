const make_Customer = require('./makeCustomer')
const patch_Customer = require('./patchCustomer')


const make_Customers = make_Customer()
const patch_Customers = patch_Customer()

const services = Object.freeze({ make_Customers,patch_Customers })

module.exports = services
module.exports = { make_Customers, patch_Customers }