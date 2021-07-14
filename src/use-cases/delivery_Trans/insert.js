const add_del_Transaction = ({ make_del_Transactions, del_TransactionDB}) => {
    return async function post(info) {
      let data = await make_del_Transactions(info); // entity
  
      data = {
        transactions_details: data.gettransactions_details(),
        DeliveryID: data.getDeliveryID(),
        //SupplierName: data.getSupplierName()
      };
//    const {transactions_details} = data
     const res1 = await del_TransactionDB.selectProductID({ data })    
      if (res1) {
        return `Transaction Delivery has been added successfully.`;
      } else {
        throw new Error(`Error on inserting Transaction Delivery, please try again.`);
      }
    };
  };
  
  module.exports = add_del_Transaction;
  