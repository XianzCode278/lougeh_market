const { userAdds, userRetrieves, userDeletes, userUpdated } = require("../../controller/user/app");



    const route = ({ router, makeExpressCallback }) => {

    // --------------------INSERT DATA------------------------------
    router.post("/",makeExpressCallback(userAdds));
    router.get("/", makeExpressCallback(userRetrieves))
    router.get("/:id", makeExpressCallback(userRetrieves))
    router.delete("/:id", makeExpressCallback(userDeletes))
    router.patch("/:id", makeExpressCallback(userUpdated))
    //---------------------SELECT DATA -------------------------

    
    return router;
  };
  
  module.exports = route;
  