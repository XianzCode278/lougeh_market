
const {
    make_Customers,
    patch_Customers
} = require('../../entities/customer/app')

const customerDB = require('../../data-access/customer/app')
const addCustomer = require('./add')
const retrieveCustomer = require('./retrieve')
const deleteCustomer = require('./delete')
const updateCustomer = require('./update')

const addCustomers = addCustomer({ make_Customers, customerDB })
const retrieveCustomers = retrieveCustomer({ customerDB })
const deleteCustomers = deleteCustomer({ customerDB })
const updateCustomers = updateCustomer({ patch_Customers, customerDB})

const services = Object.freeze ({
    addCustomers,
    retrieveCustomers,
    deleteCustomers,
    updateCustomers
})

module.exports = services
module.exports = {
    addCustomers,
    retrieveCustomers,
    deleteCustomers,
    updateCustomers
}