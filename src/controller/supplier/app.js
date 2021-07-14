const {
    addSuppliers,
    retrieveSuppliers,
    deleteSuppliers,
    updateSuppliers

  } = require("../../use-cases/supplier/app");
//const aa = require("../../migrations")
    const supplierAdd = require("./insert");
    const supplierRetrieve = require("./retrieve")
    const supplierDelete = require("./delete")
    const supplierUpdate = require("./update")

     const supplierAdds = supplierAdd({ addSuppliers });
     const supplierRetrieves = supplierRetrieve({ retrieveSuppliers });
      const supplierDeletes = supplierDelete({ deleteSuppliers });
      const supplierUpdates = supplierUpdate({ updateSuppliers });

 
  const services = Object.freeze({
    supplierAdds,
    supplierRetrieves,
    supplierDeletes,
    supplierUpdates

  });
  
  module.exports = services;
  module.exports = {
    supplierAdds,
    supplierRetrieves,
    supplierDeletes,
    supplierUpdates

   };
  