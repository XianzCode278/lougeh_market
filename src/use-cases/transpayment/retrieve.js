const retrieveTranspayment= ({ transPaymentDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await transPaymentDB.selectOneTranspayment({id})
            return selectOne
        } else {
            const selectAll = await transPaymentDB.selectAllTranspayment({})
            return selectAll
        }
    }

}


module.exports = retrieveTranspayment