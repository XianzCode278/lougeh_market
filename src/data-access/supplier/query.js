const { Supplier_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                         insertSupplier,
                         selectOneSupplier,
                         selectAllSupplier,
                         querydeleteSupplier,
                         queryUpdateSupplier

                         })

          async function queryUpdateSupplier ({data, SuppID}) {
                        const updateSupp = await Supplier_TBL.update(data,{where: {id: SuppID}})
                        const selectUpdatedSupplier = await Supplier_TBL.findOne({where: {id: SuppID}})
                         return selectUpdatedSupplier
                  
            
             }
            async function insertSupplier ({data}) {
                   
                        const {SuppName, SuppContact, SuppAddress}  = data
                        const supplier_id =1
                        const user_create = await Supplier_TBL.create({SuppName, SuppContact, SuppAddress,supplier_id})
                        return user_create
                    

            }

            async function selectOneSupplier ({id}){
                const selectUser = await Supplier_TBL.findOne({
                        where: {id}
                }).catch (err => {
                    if(err){
                        res.statusCode(400)
                    }
                })
                return selectUser
            }

            async function selectAllSupplier ({req, res}){
                const selectAll = await Supplier_TBL.findAll({order:[['id','DESC']]}).catch((err) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.send(selectAll)
                    }
                })
                return selectAll
            }



            async function querydeleteSupplier ({id}){
                const deleteduser = await Supplier_TBL.findOne({
                    where: {id}
                })
                await deleteduser.destroy()
                const get_allUSer = await Supplier_TBL.findAll()
                return(get_allUSer)
            }

         

}

module.exports = query