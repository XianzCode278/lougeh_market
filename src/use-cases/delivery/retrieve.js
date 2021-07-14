const retrieveProduct = ({ deliveryDB }) => {
    return async function select(info) {
        const {id} = info
        if(id) {
            const selectOne =  await deliveryDB.selectOneDelivery({id})
            if(selectOne) {
               return selectOne 
            } else {
                throw new Error(`Error an Incounter while selecting delevery, please try again later`)
            }
            
        } else {
            const selectAll = await deliveryDB.selectAllDelivery({})
            if(selectAll) {
                    return selectAll 
            } else {
                throw new Error(`Error an Incounter while selecting all delevery, please try again later`)
            }
       
        }
    }

}


module.exports = retrieveProduct