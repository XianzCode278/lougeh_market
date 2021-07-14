const addCustomer = ({ make_Customers, customerDB }) => {
    return async function post(info) {
      let data = await make_Customers(info); // entity
  
      data = {
        CusName: data.getCusName(),
        CusContact: data.getCusContact(),
        CusAddress: data.getCusAddress(),
     
      };
      const res = await customerDB.insertSupplier({ data });      
      if (res) {
        return `Customer has been added successfully.`;
      } else {
        throw new Error(`Error on Customer, please try again.`);
      }
    };
  };
  
  module.exports = addCustomer;
  