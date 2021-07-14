const addDelivery = ({ make_deliverys, deliveryDB}) => {
    return async function post(info) {
      let data = await make_deliverys(info); // entity
  
      data = {
        transactions_details: data.gettransaction_details(),
        DateDelivered: data.getDateDelivered(),
        isStatus: data.getisStatus(),
        UserID: data.getUserID(),
        SuppID: data.getSuppID(),
      
      };

    const createDeliveryTrans = await deliveryDB.insertTransaction({data});
    if(!createDeliveryTrans) throw new Error ("No Delivery Transaction has been made! ")
    const res = await deliveryDB.inserDeliveryItem({data,createDeliveryTrans});
      if(res){
          return res
      } else {
        throw new Error("Error while recording Delivery, please try again later")
      }

    };
  };
  
  module.exports = addDelivery;
  