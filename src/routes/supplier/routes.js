
const { supplierAdds, supplierRetrieves, supplierDeletes, supplierUpdates } = require("../../controller/supplier/app");



    const route = ({ router, makeExpressCallback }) => {

    // --------------------INSERT DATA------------------------------
    router.post("/",makeExpressCallback(supplierAdds));
    router.get("/", makeExpressCallback(supplierRetrieves));
    router.get("/:id", makeExpressCallback(supplierRetrieves));
    //---------------------SELECT DATA -------------------------
      router.delete("/:id", makeExpressCallback(supplierDeletes))
      router.patch("/:id", makeExpressCallback(supplierUpdates))
    
    return router;
  };
  
  module.exports = route;
  