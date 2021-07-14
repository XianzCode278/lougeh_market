const { Customer_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                         insertSupplier,
                         selectAllCustomer,
                         selectOneCustomer,
                         querydeleteCustomer,
                         queryUpdateCustomer
                         })

            async function insertSupplier ({data}) {
                    
                    const {CusName, CusContact, CusAddress}  = data
                    const user_customer = await Customer_TBL.create({CusName, CusContact, CusAddress})
                    if(user_customer){
                        return user_customer 
                    } else {
                        return false
                    }
                 
                 

            }

            async function selectOneCustomer ({id}){
                const selectCustomer = await Customer_TBL.findOne({
                where: {id}, attributes:['CusName','CusAddress','CusContact']})
                if(selectCustomer){
                    return selectCustomer
                } else {
                    return false
                }
                
            }

            async function selectAllCustomer (){
                const selectAll = await Customer_TBL.findAll({order:[['id','DESC']],attributes: ['id','CusName','CusAddress','CusContact']})
                if(selectAll){
                    return selectAll
                } else {
                    return false
                }
                
            }


            async function querydeleteCustomer ({id}){
                const deleteduser = await Customer_TBL.findOne({
                    where: {id}
                })
                if(deleteduser){
                await deleteduser.destroy()
                const get_allUSer = await Customer_TBL.findAll({order:[['id','DESC']]})
                return(get_allUSer)
                } else {
                    return false
                }
                
            }
            async function queryUpdateCustomer ({data,CusID}) {
              // console.log("Cusname: ", CusID)
               const updatedata = await Customer_TBL.update(data,{ where: {id:CusID}})
               return updatedata                 

            }

}

module.exports = query