


const { productAdds, productRetrieves,productDeletes,productUpdates} = require("../../controller/product/app");



const route = ({ router, makeExpressCallback }) => {

// --------------------INSERT DATA------------------------------
router.post("/",makeExpressCallback(productAdds));
router.get("/", makeExpressCallback(productRetrieves));
router.get("/:id", makeExpressCallback(productRetrieves))
router.delete("/:id", makeExpressCallback(productDeletes))
router.patch("/:id",makeExpressCallback(productUpdates))
return router;
};

module.exports = route;
