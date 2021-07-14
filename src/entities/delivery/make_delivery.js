const make_delivery = () => {

    return function make({ DateDelivered,isStatus,UserID,transactions_details,SuppID } = {}) {
          if(!DateDelivered) throw new Error("No Date Delivered Found.");
    //      if (!isStatus)throw new Error("Please provide Delivery Product Price.");    
          if (!UserID) throw new Error(" Unknown User or User not registered");
          if(!transactions_details) throw new Error("No Product Record Found")
          if(!SuppID) throw new Error("Please select supplier")

       //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
         return Object.freeze({
           gettransaction_details:() => transactions_details,
           getDateDelivered: () => DateDelivered,
           getisStatus: () => isStatus,
           getUserID: () => UserID,
           getSuppID: () => SuppID,

         });
       };
     };
     
     module.exports = make_delivery;
     