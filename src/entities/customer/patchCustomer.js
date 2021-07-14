const patch_Customer = () => {
    return function make( {id,CusName,CusAddress, CusContact} = {}) {
 //console.log(`USER ID: ${id} USERNAME: ${username} PASSPASSWORD : ${password}`)
      // if (!id) throw new Error("Please enter Customer ID.");
      // if (!CusName) throw new Error("Please provide Customer Name."); 
      // if (!CusAddress) throw new Error("Please provide Customer Contact.");
      // if (!CusContact) throw new Error("Please provide Customer Address."); 


      return Object.freeze({
        getID:() => id,
        getCusName: () => CusName,
        getCusAddress: () => CusAddress,
        getCusContact: () => CusContact,
      
      });
    };
  };
  
  module.exports = patch_Customer;
  