const make_order= () => {

    return function make({ TransactionDate,Trans_Status,TransPaymentDetails,TotalAmount,TenderedAmount,Change,CustomerTBLId,UserTBLId } = {}) {
         if(!TransactionDate) throw new Error("Please Create Transaction first.");
         if(!TransPaymentDetails) throw new Error("Please Create Transaction first.");
         if(!TotalAmount) throw new Error("Can't Find Total Amount .");
         if(!TenderedAmount) throw new Error("Please Provide Tendered Amount.");
      //   if(!Change) throw new Error("Cant find Customer Change.");
         if(!CustomerTBLId) throw new Error("No Customer Name Found Please Register Customer and Try again.");
         if(!UserTBLId) throw new Error("No User found in this transaction.");

         return Object.freeze({
           getTransactionDate: () => TransactionDate,
           getTransPaymentDetails: () => TransPaymentDetails,
           getTotalAmount: () => TotalAmount,
           getTenderedAmount: () => TenderedAmount,
           getChange: () => Change,
           getCustomerTBLId: () => CustomerTBLId,
           getUserTBLId: () => UserTBLId,
           getTrans_Status: () => Trans_Status

         });
       };
     };
     
     module.exports = make_order;
     