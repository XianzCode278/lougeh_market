const addSupplier = ({ make_suppliers, supplierDB }) => {
    return async function post(info) {
      let data = await make_suppliers(info); // entity
  
      data = {
        SuppName: data.getSuppName(),
        SuppContact: data.getSuppContact(),
        SuppAddress: data.getSuppAddress(),
     
      };
 
      const res = await supplierDB.insertSupplier({ data });

      let msg = `Error on inserting Supplier, please try again.`;
      
      if (res) {
    msg = `Supplier has been added successfully.`;
        return res;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = addSupplier;
  