const { add_del_Transactions, update_delTrans, retrieve_del_Trans } = require('../../use-cases/delivery_Trans/app')

const del_Transaction_add = require('./insert')
const del_TransUpdate = require('./update')
const del_TransRetrieve = require('./retrieve')

const del_Transaction_adds = del_Transaction_add({ add_del_Transactions })
const del_TransUpdates = del_TransUpdate({update_delTrans})
const del_TransRetrieves = del_TransRetrieve({ retrieve_del_Trans })

const services = Object.freeze ({
    del_Transaction_adds,
    del_TransUpdates,
    del_TransRetrieves

})

module.exports = services
module.exports = { del_Transaction_adds, del_TransUpdates, del_TransRetrieves }
