const update_delTran = ({ patch_delivery_Trans, del_TransactionDB }) => {
    return async function puts(id, ...info) {
      let data = await patch_delivery_Trans(id, info) // entity
      
      data = {
            id: data.getID(),
          ProdDesc: data.getProdDesc(),
          Quantity: data.getQuantity(),
          Price: data.getPrice(),
     
           }
      //   console.log(data.FName)   
     const res = await del_TransactionDB.findProductID({ data }) 
    //  const res = await del_TransactionDB.update_del_Transaction({ data }) 
          const suppID =  res.id
         //console.log(`SUPPID = ${suppID}`)
     const res1 = await del_TransactionDB.update_del_Transaction({ data, suppID })
      
      if (res1){ 
             let message = `Update Successfully!`
            return message
         } else { 
             throw new Error(`Data not Update, Problem encounter duirng the process`)
            }     
    } 
  }
  
  module.exports = update_delTran;
  