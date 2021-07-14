const { Delivery_TBL, User_TBL,Transaction_DeliveryTBL,Product_TBL, Supplier_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                         inserDeliveryItem,
                         getUserID,
                         selectOneDelivery,
                         selectAllDelivery,
                         insertTransaction
                        //  queryUpdateCustomer
                         })

            async function insertTransaction ({data}) {
                
                    const { DateDelivered, isStatus,UserID,SuppID}  = data
                    const findUser = await User_TBL.findOne({where:{id:UserID}})
                    if(!findUser){
                        throw new Error ('User Unknown Please make sure that the user register')
                    }
                    const Insert_Delivery = await Delivery_TBL.create({DateDelivered, isStatus,UserTBLId: UserID, SupplierTBLId:SuppID}) 
                    if(!Insert_Delivery) throw new Error("Cant insert data")
                    if(Insert_Delivery){
                        return Insert_Delivery
                    } else {
                        return false
                    }
            }

            async function inserDeliveryItem ({data,createDeliveryTrans}) {
            
                const transID = createDeliveryTrans.id
                const {transactions_details} = data
                const newDtails = transactions_details.details
                const {SupplierTBLId} = createDeliveryTrans
                for(let x = 0; x < transactions_details.details.length; x++){

                        let Insert_Delivery = await Transaction_DeliveryTBL.create({
                            DeliveryTBLId: transID,
                            ProductTBLId:newDtails[x].id,
                            Quantity: newDtails[x].Quantity,
                            Price: newDtails[x].price,

                        })     
                        let tempQuantity = newDtails[x].Quantity
                        const updated_PoductQuantity = await Product_TBL.findOne({where: {id: newDtails[x].id}}) 
                        updated_PoductQuantity.Quantity += tempQuantity
                        const upt = await updated_PoductQuantity.save()
                }   
                        const reviewDeliveries = await Delivery_TBL.findOne({
                            where: {id:transID}                        
                        })
                        return reviewDeliveries

            }





            async function getUserID ({ data }){
                const  { FName } = data
                const selectUser = await User_TBL.findOne({
                    where: {FName}
                }) 
                if(selectUser){
                     return {id} = selectUser
                } else {
                    return false
                }
             
            }




            async function selectOneDelivery ({ id }){

                const selectSupplier = await Delivery_TBL.findOne({
                    where: {id}, include: [
                        {model:User_TBL, attributes:['id','FName']}, 
                        {model:Supplier_TBL, attributes:['id','SuppName']}  
                    ], attributes: ['id','DateDelivered','isStatus']
            })
                if(selectSupplier){
                    return selectSupplier   
                } else {
                    return false
                }
         
            }

            async function selectAllDelivery ({req, res}){
                const selectAll = await Delivery_TBL.findAll({
                   order:[['id','DESC']],
                    include: [
                        {model:User_TBL},  
                        {model:Supplier_TBL, attributes:['id','SuppName']}   
                    ], attributes: ['id','DateDelivered','isStatus']
              //      include:[User_TBL]
                  }) 
                if(selectAll){
                   return selectAll 
                } else {
                    return false
                }
                
            }


}

module.exports = query