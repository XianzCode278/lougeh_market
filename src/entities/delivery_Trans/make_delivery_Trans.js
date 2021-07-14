const make_del_Transaction = () => {

    return function make({ DeliveryID,transactions_details } = {}) {
      
         if(!DeliveryID) throw new Error("No DeliveryID Found.");
         if(!transactions_details) throw new Error("No Delivery Data Found.");
        // if(!SupplierName) throw new Error("No Delivery_ID Found.");
       // console.log("Transdetails = ", transactions_details)
         return Object.freeze({
           gettransactions_details: () => transactions_details,
           getDeliveryID: () => DeliveryID,
        //   getSupplierName: () => SupplierName,
  //         getQuantity: () => SuppAddress,
   
         });
       };
     };
     
     module.exports = make_del_Transaction;
     