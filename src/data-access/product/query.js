const { Product_TBL, Supplier_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                         queryinsertProduct,
                         selectAllProduct,
                         selectOneSupplier,
                        selectOneProduct,
                        querydeleteProduct,
                        
                        queryUpdateProduct
                        //  queryUpdateCustomer
                         })

            async function queryinsertProduct ({data}) {
                    try {
                        const { ProdDesc, Price}  = data
                        const Quantity = 0
                    const user_product = await Product_TBL.create({ProdDesc, Price, Quantity}).catch((err) => {
                  
                        if(!err){
                            res.send(user_product)
                      
                        } else {
                            console.log(err)
                        }
                    })
                        return user_product
                    } catch (e) {
                        console.log(`ERROR : ${e}`)
                    }

            }

            async function selectOneSupplier ({ data }){

                const  { SuppName } = data
                console.log(`ID = ${ SuppName }`)
                const selectSupplier = await Supplier_TBL.findOne({
                    where: {SuppName}
            }).catch (err => {
                if(err){
                     res.statusCode(400)
                }
            })
            return selectSupplier
            }


            async function selectOneProduct ({ id }){

                const selectSupplier = await Product_TBL.findOne({
                    where: {id}
            })
            return selectSupplier
            }



            async function selectAllProduct ({req, res}){
                const selectAll = await Product_TBL.findAll({order:[['id','DESC']] }) 
                return selectAll
            }


            

            async function querydeleteProduct ({id}){
                const deleteduser = await Product_TBL.findOne({
                    where: {id}
                })
                await deleteduser.destroy()
                const get_allProduct= await Product_TBL.findAll({})
                return(get_allProduct)
            }
            async function queryUpdateProduct({data,ProductID}) {
               
                const updateProduct = await Product_TBL.update(data,{ where: {id:ProductID}})
                return updateProduct   


            }

}

module.exports = query