const updateSupplier = ({ patch_Suppliers, supplierDB }) => {
    return async function puts(id, ...info) {
      let data = await patch_Suppliers(id, info) // entity
      let SuppID = data.getID()
      data = {
  //        id: data.getID(),
        SuppName: data.getSuppName(),
        SuppContact: data.getSuppContact(),
        SuppAddress: data.getSuppAddress(),
           }
      //   console.log(data.FName)   
      const res = await supplierDB.queryUpdateSupplier({ data, SuppID }) 
     
      if (res){ 
             let message = `Update Successfully!`
            return message
         } else { 
             throw new Error(`Data not Update, Problem encounter duirng the process`)
            }     
    } 
  }
  
  module.exports = updateSupplier;
  