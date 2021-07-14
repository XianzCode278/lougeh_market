const make_product = () => {

    return function make({ ProdDesc,Price } = {}) {
         if(!ProdDesc) throw new Error("Please Enter Product Description.");
       //  if (!Price)throw new Error("Please provide product Price.");    
   //      if (!Quantity) throw new Error("Please provide Address.");

       //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
         return Object.freeze({
           getProdDesc: () => ProdDesc,
           getPrice: () => Price,
         //   getSuppName: () => SuppName,
  //         getQuantity: () => SuppAddress,
   
         });
       };
     };
     
     module.exports = make_product;
     