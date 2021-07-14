


const { deliveryAdds, deliveryRetrieves } = require("../../controller/delivery/app");



const route = ({ router, makeExpressCallback }) => {

// --------------------INSERT DATA------------------------------
router.post("/",makeExpressCallback( deliveryAdds ));
router.get("/", makeExpressCallback( deliveryRetrieves ));
router.get("/:id",makeExpressCallback( deliveryRetrieves))

return router;
};

module.exports = route;
