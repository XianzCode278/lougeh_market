const retrieveSupplier = ({ supplierDB }) => {
    return async function select(info) {
        const {id} = info
   // console.log(`ID: ${id}`)
        if(id) {
            const selectOne =  await supplierDB.selectOneSupplier({id})
            return selectOne
        } else {
            const selectAll = await supplierDB.selectAllSupplier({})
            return selectAll
        }
    }

}


module.exports = retrieveSupplier