const retrieveCustomer = ({ customerDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await customerDB.selectOneCustomer({id})
            if(selectOne){
               return selectOne 
            } else {
                throw new Error(` Error in selecting data! `)
            }
            
        } else {
            const selectAll = await customerDB.selectAllCustomer({})
            if(selectAll){
               return selectAll  
            } else {
                throw new Error(` Error in selecting all data!`)
     
            }
           
        }
    }

}


module.exports = retrieveCustomer