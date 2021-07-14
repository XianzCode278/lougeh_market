const updateProduct = ({ patch_Products, productDB }) => {
    return async function puts(id,...info) {
      let data = await patch_Products(id,info) // entity
       const ProductID = data.getID()
      data = {
        
          ProdDesc: data.getProdDesc(),
          Price: data.getPrice(),
          SuppName: data.getSuppName(),
           }

         // console.log("id : ",ProductID)
      const res1 = await productDB.queryUpdateProduct({ data, ProductID })
      
      if (res1){ 
             let message = `Update Successfully!`
            return message
         } else { 
             throw new Error(`Data not Update, Problem encounter duirng the process`)
            }     
    } 
  }
  
  module.exports = updateProduct;
  