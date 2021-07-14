const make_Customer = () => {

    return function make({ CusName,CusAddress, CusContact } = {}) {
         if(!CusName) throw new Error("Please Enter your Customer Name.");
         if (!CusAddress)throw new Error("Please provide Customer Contact.");    
         if (!CusContact) throw new Error("Please provide Customer Address.");

       //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
         return Object.freeze({
           getCusName: () => CusName,
           getCusAddress: () => CusAddress,
           getCusContact: () => CusContact,
   
         });
       };
     };
     
     module.exports = make_Customer;
     