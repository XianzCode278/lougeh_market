const updateOrder = ({ patchOrders,orderDB }) => {
    return async function puts(id, ...info) {
      let data = await patchOrders(id, info) // entity
      
      data = {
        //id: data.getID(),
        TransPaymentTBLId: data.getTransPaymentTBLId(),
        TransPaymentDetails: data.getTransPaymentDetails(),
        TotalAmount: data.getTotalAmount(),
        TenderedAmount: data.getTenderedAmount(),
        Change: data.getChange(),
        CustomerName: data.getCustomerName(),
        UserName: data.getUserName(),

     
           }

     const res1 = await orderDB.queryupdateOder({data})
     if (!res1) throw new Error (" Data not Update please try again later ")
     const updateProduct = await orderDB.updateProductQuantity({data,res1})
     if(!updateProduct) throw new Error("Data not Update please try again later ")
     const updateddata = await orderDB.updateOrderNow({res1})
     if(!updateddata) throw new Error("Data not Update please try again later ")
     const updateTranspayment = await orderDB.updateTranspay({data})      
      
     
      
     
           
           return updateddata
         
                
    } 
  }
  
  module.exports = updateOrder;
  