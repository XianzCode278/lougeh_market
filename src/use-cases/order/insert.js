const addOrder= ({ make_orders, orderDB}) => {
    return async function post(info) {
      let data = await make_orders(info); // entity
      let TransPaymentDetails = data.getTransPaymentDetails()
      data = {
        TransactionDate: data.getTransactionDate(),
        //TransPaymentDetails: data.getTransPaymentDetails(),
        TotalAmount: data.getTotalAmount(),
        TenderedAmount: data.getTenderedAmount(),
        Change: data.getChange(),
        CustomerTBLId: data.getCustomerTBLId(),
        UserTBLId: data.getUserTBLId(),
        Trans_Status: data.getTrans_Status(),

      };
      const CreatetransID = await orderDB.createTransactionID({data})
      if(!CreatetransID) throw new Error ("Transaction ID not create pls try again later")
      const res1 = await orderDB.insertOders({ data,CreatetransID,TransPaymentDetails })
      if(!res1) throw new Error ("Order not recorded please try again")
      const returnOrder = await orderDB.retrieveOderbyTransID({CreatetransID,})
      if (returnOrder) {
       return returnOrder;
      } else {
        throw new Error(`Error on inserting Transaction Payment, please try again.`);
      }
    };
  };
  
  module.exports = addOrder;
  