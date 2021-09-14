const {

    retrieveTranspayments,
    deleteTranspayments
} = require("../../use-cases/transpayment/app")


const transpaymentRetrieve = require('./retrieve')
const transpaymentDelete = require('./delete')


const transpaymentRetrieves = transpaymentRetrieve({retrieveTranspayments})
const transpaymentDeletes = transpaymentDelete({deleteTranspayments})

const services = Object.freeze({

    transpaymentRetrieves,
    transpaymentDeletes
})


module.exports = services,
module.exports = {

    transpaymentRetrieves,
    transpaymentDeletes
}