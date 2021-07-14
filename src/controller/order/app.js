const {
    addOrders,
    retrieveOrders,
    updateOrders,
    
} = require('../../use-cases/order/app')

const orderAdd = require('./insert')
const orderRetrieve = require('./retrieve')
const orderUpdate = require('./update')

const orderAdds = orderAdd({addOrders})
const orderRetrieves = orderRetrieve({retrieveOrders})
const orderUpdates = orderUpdate({updateOrders})

const services = Object.freeze({
    orderAdds,
    orderRetrieves,
    orderUpdates
})


module.exports = services

module.exports = {
    orderAdds,
    orderRetrieves,
    orderUpdates
}