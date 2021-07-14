const {
    make_suppliers,
    patch_Suppliers
} = require('../../entities/supplier/app')

const supplierDB = require('../../data-access/supplier/app')

const productDB = require('../../data-access/product/app')
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
const addSupplier = require('./insert')
const retrieveSupplier = require('./retrieve')
const deleteSupplier = require('./delete')
const updateSupplier = require('./update')
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

const addSuppliers = addSupplier({ make_suppliers, supplierDB, productDB })
const retrieveSuppliers = retrieveSupplier({ supplierDB })
const deleteSuppliers = deleteSupplier({ supplierDB })
const updateSuppliers = updateSupplier({ patch_Suppliers, supplierDB })

// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

const services = Object.freeze ({
    addSuppliers,
    retrieveSuppliers,
    deleteSuppliers,
    updateSuppliers


})

module.exports = services
module.exports = {
    addSuppliers,
    retrieveSuppliers,
    deleteSuppliers,
    updateSuppliers

}