const patchOrder = () => {

    return function make ({TransPaymentTBLId,TransPaymentDetails,TotalAmount,TenderedAmount,Change,CustomerName,UserName} = {}){
       // if(!id) throw new Error("Cant find Order ID")
        //  if(!TransPaymentTBLId) throw new Error("Please Create Transaction first.");
        //  if(!TransPaymentDetails) throw new Error("Please Create Transaction first.");
        //  if(!TotalAmount) throw new Error("Can't Find Total Amount .");
        //  if(!TenderedAmount) throw new Error("Please Provide Tendered Amount.");
        //  if(!Change) throw new Error("Cant find Customer Change.");
        //  if(!CustomerName) throw new Error("No Customer Name Found Please Register Customer and Try again.");
        //  if(!UserName) throw new Error("No User found in this transaction.");

         return Object.freeze({
            getID:() => id,
            getTransPaymentTBLId: () => TransPaymentTBLId,
            getTransPaymentDetails: () => TransPaymentDetails,
            getTotalAmount: () => TotalAmount,
            getTenderedAmount: () => TenderedAmount,
            getChange: () => Change,
            getCustomerName: () => CustomerName,
            getUserName: () => UserName,
 
          });

    }

}
module.exports = patchOrder