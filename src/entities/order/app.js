const make_order = require('./make_order')
const patchOrder = require('./patch_order')

const make_orders = make_order()
const patchOrders = patchOrder()

const services = Object.freeze({make_orders, patchOrders})

module.exports = services
module.exports = { make_orders, patchOrders }