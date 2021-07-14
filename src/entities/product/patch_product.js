const patch_Product = () => {
    return function make( {id,ProdDesc,Price, SuppName} = {}) {
 //console.log(`USER ID: ${id} USERNAME: ${username} PASSPASSWORD : ${password}`)
      // if (!id) throw new Error("Please enter Customer ID.");
      // if (!ProdDesc) throw new Error("Please provide Product Description."); 
      // if (!Price) throw new Error("Please provide Product Price.");
      // if (!SuppName) throw new Error("Please provide Supplier Company Name."); 


      return Object.freeze({
        getID: () => id,
        getProdDesc: () => ProdDesc,
        getPrice: () => Price,
        getSuppName: () => SuppName,
        
      
      });
    };
  };
  
  module.exports = patch_Product;
  