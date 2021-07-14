


const { userLogins } = require("../../controller/login/app");



const route = ({ router, makeExpressCallback }) => {

// --------------------INSERT DATA------------------------------
router.post("/",makeExpressCallback(userLogins));

return router;
};

module.exports = route;
