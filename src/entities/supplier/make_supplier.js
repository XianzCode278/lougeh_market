const make_supplier = () => {

    return function make({ SuppName,SuppContact, SuppAddress } = {}) {
         if(!SuppName) throw new Error("Please Enter your Supplier Company Name.");
         if (!SuppContact)throw new Error("Please provide Contact.");    
         if (!SuppAddress) throw new Error("Please provide Address.");

       //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
         return Object.freeze({
           getSuppName: () => SuppName,
           getSuppContact: () => SuppContact,
           getSuppAddress: () => SuppAddress,
   
         });
       };
     };
     
     module.exports = make_supplier;
     