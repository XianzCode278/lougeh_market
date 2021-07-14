const { Delivery_TBL, Transaction_DeliveryTBL, Product_TBL, Supplier_TBL,User_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                          selectProductID,
                          findProductID,
                          update_del_Transaction,
                          findOneData,
                          findAllData,
                         })

            async function findProductID ({data, id}) {
                const { ProdDesc}  = data
                        const selectProductID = await Product_TBL.findOne({
                            where: {ProdDesc}
                    })
                        return selectProductID
            }

            async function update_del_Transaction ({data, suppID}) {
                
                const { id, Quantity, Price}  = data
                console.log(`ID: ${suppID}`)
                console.log(`Quantity: ${Quantity}`)

                const updated_delTrans = await Transaction_DeliveryTBL.findOne({where: {id}}) 
                updated_delTrans.ProductTBLId = suppID
                updated_delTrans.Quantity = Quantity
                updated_delTrans.Price = Price     
                const upt = await updated_delTrans.save()

                return upt
            }


            async function selectProductID({ data }){
                const {DeliveryID,transactions_details} = data
                const newDtails = transactions_details.details
                for(let x = 0; x < transactions_details.details.length; x++){
                    let selectSupplier = await Supplier_TBL.findOne({where:{SuppName: newDtails[x].SupplierName} })
           
                    let selectProduct= await Product_TBL.findOne({
                                where: {ProdDesc: newDtails[x].Productname}
                        })

                        let {id} = selectProduct
                        let Insert_Delivery = await Transaction_DeliveryTBL.create({
                            DeliveryTBLId: DeliveryID,
                            ProductTBLId:id ,
                            Quantity: newDtails[x].Quantity,
                            Price: newDtails[x].price,
                            SupplierTBLId: selectSupplier.id
                            

                        })     
                        let tempQuantity = newDtails[x].Quantity

                        const updated_PoductQuantity = await Product_TBL.findOne({where: {id: selectProduct.id}}) 
                        updated_PoductQuantity.Quantity += tempQuantity
                        const upt = await updated_PoductQuantity.save()
                   
                     if(x === transactions_details.details.length -1){
                        return  Insert_Delivery
                     }
                }   
                
                
            }

            
            async function findOneData ({id}) {
                     console.log("ID",id)
                const selectOne = await Transaction_DeliveryTBL.findAll({
                    where: {DeliveryTBLId:id},
                    include: [
                            {model:Product_TBL, attributes: ['ProdDesc','Price']}, 
                            ], attributes: ['id','Quantity']
        
            })
                return selectOne
            }
            
            async function findAllData ({}) {
                
                const selectall= await Transaction_DeliveryTBL.findAll({
                    order:[['id','DESC']],
                    include: [
                        {model:Product_TBL, attributes: ['ProdDesc','Price']},
                        ], attributes: ['id','Quantity']})

                return selectall
            }
 

}

module.exports = query