const retrieveOrder = ({ orderDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await orderDB.findOneOrder({id})
            return selectOne
        } else {
            const selectAll = await orderDB.findAllOrder()
            return selectAll
        }
    }

}


module.exports = retrieveOrder