


const { customerAdds,customerRetrieves,customerDeletes,customerUpdates } = require("../../controller/customer/app");



    const route = ({ router, makeExpressCallback }) => {

    // --------------------INSERT DATA------------------------------
    router.post("/",makeExpressCallback(customerAdds));
    router.get("/", makeExpressCallback(customerRetrieves));
    router.get("/:id", makeExpressCallback(customerRetrieves))
    router.delete("/:id", makeExpressCallback(customerDeletes));
    router.patch("/:id", makeExpressCallback(customerUpdates))
    return router;
  };
  
  module.exports = route;
  