const {
    make_orders,
    patchOrders
} = require('../../entities/order/app')

const orderDB = require('../../data-access/order/app')

const addOrder = require('./insert')
const retrieveOrder = require('./retrieve')
const updateOrder = require('./update')


const addOrders = addOrder({make_orders, orderDB})
const retrieveOrders = retrieveOrder({orderDB})
const updateOrders = updateOrder({patchOrders,orderDB})


const services = Object.freeze ({
    addOrders,
    retrieveOrders,
    updateOrders
})

module.exports = services,
module.exports = {addOrders, retrieveOrders, updateOrders}