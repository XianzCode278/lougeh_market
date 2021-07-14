const make_delivery = require("./make_delivery");

const make_deliverys = make_delivery()

const services = Object.freeze({ make_deliverys })

module.exports = services
module.exports = { make_deliverys }