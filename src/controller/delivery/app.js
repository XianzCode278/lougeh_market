const {
    addDeliverys,
    retrieveDeliverys

} = require("../../use-cases/delivery/app")

const deliveryAdd = require('./add')
const deliveryRetrieve  = require('./retrieve')

const deliveryAdds = deliveryAdd({addDeliverys})
const deliveryRetrieves = deliveryRetrieve({retrieveDeliverys})

const services = Object.freeze({
    deliveryAdds,
    deliveryRetrieves
})

module.exports = services
module.exports = { deliveryAdds, deliveryRetrieves}