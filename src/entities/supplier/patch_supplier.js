const patch_Supplier = () => {
    return function make( {id,SuppName,SuppContact, SuppAddress} = {}) {
 //console.log(`USER ID: ${id} USERNAME: ${username} PASSPASSWORD : ${password}`)
      if (!id) throw new Error("Please enter Supplier ID.");
      // if (!SuppName) throw new Error("Please provide Supplier Company Name."); 
      // if (!SuppContact) throw new Error("Please provide Supplier Contact.");
      // if (!SuppAddress) throw new Error("Please provide Supplier Address."); 


      return Object.freeze({
        getID:() => id,
        getSuppName: () => SuppName,
        getSuppContact: () => SuppContact,
        getSuppAddress: () => SuppAddress,
      
      });
    };
  };
  
  module.exports = patch_Supplier;
  