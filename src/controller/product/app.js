const {
    addProducts,
    retrieveProducts,
    deleteProducts,
    updateProducts
} = require("../../use-cases/product/app")

const productAdd = require("./insert")
const productRetrieve = require("./retrieve")
const productDelete = require("./delete")
const productUpdate = require("./update")

const productAdds = productAdd({ addProducts })
const productRetrieves = productRetrieve({retrieveProducts})
const productDeletes = productDelete({ deleteProducts })
const productUpdates = productUpdate({updateProducts})

const services = Object.freeze({
    productAdds,
    productRetrieves,
    productDeletes,
    productUpdates

})

module.exports = services,
module.exports = {

    productAdds,
    productRetrieves,
    productDeletes,
    productUpdates
}