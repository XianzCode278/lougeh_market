const retrieveProduct = ({ productDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await productDB.selectOneProduct({id})
            return selectOne
        } else {
            const selectAll = await productDB.selectAllProduct({})
            return selectAll
        }
    }

}


module.exports = retrieveProduct