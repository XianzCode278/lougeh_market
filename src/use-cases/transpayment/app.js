

const transPaymentDB = require('../../data-access/transpayment/app')

//const addTranspayment = require('./insert')
const retrieveTranspayment = require('./retrieve')
const deleteTranspayment = require('./delete')

//const addTranspayments = addTranspayment({make_transPayments, transPaymentDB})
const retrieveTranspayments = retrieveTranspayment({transPaymentDB})
const deleteTranspayments = deleteTranspayment({transPaymentDB})

const services = Object.freeze({
  //  addTranspayments,
    retrieveTranspayments,
    deleteTranspayments
})

module.exports = services,
module.exports = {
  //  addTranspayments,
    retrieveTranspayments,
    deleteTranspayments
}