const retrieveUser = ({ userDB }) => {
        return async function select(info) {
            const {id} = info
       // console.log(`ID: ${id}`)
            if(id) {
                const selectOne =  await userDB.selectOneUser({id})
                return selectOne
            } else {
                const selectAll = await userDB.selectAllUser({})
                return selectAll
            }
        }

}


module.exports = retrieveUser