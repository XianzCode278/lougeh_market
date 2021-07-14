const updateCustomer= ({ patch_Customers, customerDB }) => {
    return async function puts(id, ...info) {
      let data = await patch_Customers(id, info) // entity
      let CusID = data.getID();
      data = {
         // id: data.getID(),
          CusName: data.getCusName(),
          CusAddress: data.getCusAddress(),
          CusContact: data.getCusContact(),
           }

      const res = await customerDB.queryUpdateCustomer({ data,CusID }) 
     
      if (res){ 
            return `Update Successfully!`
         } else { 
             throw new Error(`Data not Update, Problem encounter duirng the process`)
            }     
    } 
  }
  
  module.exports = updateCustomer;
  