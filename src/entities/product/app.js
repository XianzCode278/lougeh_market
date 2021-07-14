const make_product = require("./make_product")
const patch_Product = require("./patch_product")

const make_products = make_product()
const patch_Products = patch_Product()

const services = Object.freeze({ make_products,patch_Products })


module.exports = services
module.exports = { make_products,patch_Products }