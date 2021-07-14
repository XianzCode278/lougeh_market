const { make_del_Transactions, patch_delivery_Trans  } = require('../../entities/delivery_Trans/app')


const del_TransactionDB = require('../../data-access/delivery_Trans/app')


const add_del_Transaction = require('./insert')
const update_delTran = require('./update')
const retrieve_del_Tran = require('./retrieve')

const add_del_Transactions = add_del_Transaction({make_del_Transactions, del_TransactionDB})
const update_delTrans = update_delTran({patch_delivery_Trans, del_TransactionDB})
const retrieve_del_Trans = retrieve_del_Tran({ del_TransactionDB })


const services = Object.freeze ({ add_del_Transactions, update_delTrans, retrieve_del_Trans })

module.exports = services
module.exports = { add_del_Transactions, update_delTrans, retrieve_del_Trans }