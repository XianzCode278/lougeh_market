const patch_delivery_Tran = () => {
    return function make( {id,ProdDesc,Quantity, Price} = {}) {
 //console.log(`USER ID: ${id} USERNAME: ${username} PASSPASSWORD : ${password}`)
      if (!ProdDesc) throw new Error("Please provide Product Description."); 
      if (!Quantity) throw new Error("Please Product Quantity."); 
      if (!Price) throw new Error("Please provide Product Price.");
  


      return Object.freeze({
        getID: () => id,
        getProdDesc: () => ProdDesc,
        getQuantity: () => Quantity,
        getPrice: () => Price,
        
        
      
      });
    };
  };
  
  module.exports = patch_delivery_Tran;
  