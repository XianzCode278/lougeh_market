const {
     make_products,
     patch_Products
} = require('../../entities/product/app')


const supplierDB = require('../../data-access/supplier/app')
const productDB = require('../../data-access/product/app')

const addProduct = require('./insert')
const retrieveProduct = require('./retrieve')
const deleteProduct = require('./delete')
const updateProduct = require('./update')

const addProducts = addProduct({ make_products, productDB })
const retrieveProducts = retrieveProduct({productDB})
const deleteProducts = deleteProduct({productDB})
const updateProducts = updateProduct({patch_Products, productDB})

const services = Object.freeze ({

    addProducts,
    retrieveProducts,
    deleteProducts,
    updateProducts

})

module.exports = services
module.exports = { 
    addProducts,
    retrieveProducts,
    deleteProducts,
    updateProducts


}