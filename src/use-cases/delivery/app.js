const { make_deliverys } = require('../../entities/delivery/app')


const deliveryDB = require('../../data-access/delivery/app')


const addDelivery = require('./add')
const retrieveDelivery = require('./retrieve')

const addDeliverys = addDelivery({make_deliverys, deliveryDB})
const retrieveDeliverys = retrieveDelivery({deliveryDB})


const services = Object.freeze ({ addDeliverys,retrieveDeliverys })

module.exports = services
module.exports = { addDeliverys, retrieveDeliverys }