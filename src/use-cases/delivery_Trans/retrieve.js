const retrieve_del_Tran = ({ del_TransactionDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await del_TransactionDB.findOneData({id})
            if(selectOne){
               return selectOne
            } else {
                throw new Error(`Error in selecting all Delivery Transactions`)
            }
           
        } else {
            const selectAll = await del_TransactionDB.findAllData({})
            if(selectAll){
                return selectAll
            } else {
                throw new Error (`Error in selecting all Delivery Transactions`)
            }
            
        }
    }

}


module.exports = retrieve_del_Tran