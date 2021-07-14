const {
    addCustomers,
    retrieveCustomers,
    deleteCustomers,
    updateCustomers

  } = require("../../use-cases/customer/app");
//const aa = require("../../migrations")
    const customerAdd = require("./add");
    const customerRetrieve = require("./retrieve");
    const customerDelete = require("./delete")
    const customerUpdate = require("./update")

     const customerAdds = customerAdd({ addCustomers });
    const customerRetrieves = customerRetrieve({ retrieveCustomers });
    const customerDeletes = customerDelete({deleteCustomers });
    const customerUpdates = customerUpdate({ updateCustomers})


  const services = Object.freeze({
    customerAdds,
    customerRetrieves,
    customerDeletes,
    customerUpdates


  });
  
  module.exports = services;
  module.exports = {
    customerAdds,
    customerRetrieves,
    customerDeletes,
    customerUpdates

   };
  