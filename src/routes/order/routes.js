



    
    const {
         orderAdds,orderRetrieves,orderUpdates
    } = require("../../controller/order/app");



    const route = ({ router, makeExpressCallback }) => {
    
    // --------------------INSERT DATA------------------------------
    router.post("/",makeExpressCallback( orderAdds ))
    router.get("/",makeExpressCallback( orderRetrieves))
    router.get("/:id",makeExpressCallback( orderRetrieves))
    router.patch("/", makeExpressCallback( orderUpdates))

    
    return router;
    };
    
    module.exports = route;
    