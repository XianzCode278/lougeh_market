const { TransPayment_TBL, Customer_TBL, User_TBL,Order_TBL,Product_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                        //
                          selectAllTranspayment,
                          selectOneTranspayment,
                          querydeleteTranspayment
                          
                         })


            async function selectOneTranspayment ({id}){
                const selectUser = await TransPayment_TBL.findOne({
                        where: {id},
                        include: [
                            {model:Customer_TBL, attributes:['id','CusName']}, 
                            {model:User_TBL, attributes:['id','FName']},
                            {model:Order_TBL, attributes:['id','ProductTBLId', 'Quantity'], include: [
                                                                                            {model: Product_TBL, attributes:['id','ProdDesc']}
                                                                                             ]}
                        ], attributes:[
                            'id',
                            'TransDate',
                            'TotalAmount',
                            'TenderedAmount',
                            'Change',
                            'CustomerTBLId',
                            'UserTBLId'
                                     ]
                })

               
                if(selectUser){
                    return selectUser
                } else {
                    return false
                }
                
            }

            async function selectAllTranspayment ({}){
                const selectAll = await TransPayment_TBL.findAll({
                        order:[['id','DESC']],    
                        include:[
                                {model: Customer_TBL, attributes:['id','CusName']},
                                {model:User_TBL, attributes:['id','FName']},
                                {model:Order_TBL, attributes:['id','ProductTBLId','Quantity'], include: [
                                                                                            {model:Product_TBL, attributes:['id','ProdDesc']}
                                                                                                   ]}
                                ], attributes:[
                                    'id',
                                    'TransDate',
                                    'TotalAmount',
                                    'TenderedAmount',
                                    'Change',
                                    'CustomerTBLId',
                                    'UserTBLId'
                                ]
                            })

            
               // console.log("Total: ", SUmAllAmount)
                if(selectAll){
                     return selectAll
                } else {
                    return false
                }
               
            }



            async function querydeleteTranspayment ({id}){
                const deletedTranspayment = await TransPayment_TBL.findOne({
                    where: {id}
                })
                if(deletedTranspayment){
                await deletedTranspayment.destroy()
                const getAllTrans= await TransPayment_TBL.findAll()
                return(getAllTrans)
                 } else {
                     return false
                 }
                
            }

         

}

module.exports = query