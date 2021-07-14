



    
    const { del_Transaction_adds, del_TransUpdates,del_TransRetrieves } = require("../../controller/delivery_Trans/app");



const route = ({ router, makeExpressCallback }) => {

// --------------------INSERT DATA------------------------------
//router.post("/",makeExpressCallback( del_Transaction_adds ))
//router.patch("/:id",makeExpressCallback( del_TransUpdates))
router.get("/",makeExpressCallback(del_TransRetrieves))
router.get("/:id", makeExpressCallback( del_TransRetrieves))

return router;
};

module.exports = route;
