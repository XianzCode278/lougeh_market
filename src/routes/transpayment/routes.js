

const {transpaymentAdds, transpaymentRetrieves, transpaymentDeletes } = require('../../controller/transpayment/app')

const route = ({ router, makeExpressCallback }) => {

    // --------------------INSERT DATA------------------------------
   // router.post("/",makeExpressCallback(transpaymentAdds));
    router.get("/", makeExpressCallback(transpaymentRetrieves));
    router.get("/:id", makeExpressCallback(transpaymentRetrieves));
   // router.delete("/:id", makeExpressCallback(transpaymentDeletes));
    console.log("router")
    return router;
  };
  
  module.exports = route;