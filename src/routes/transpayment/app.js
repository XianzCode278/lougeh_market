
const express = require("express");
const router = express.Router();
const makeExpressCallback = require("../../express-callback/app.js");

//const { isAuthentications } = require("../../middleware/JWToken");

const route = require("./routes");


const routes = route({ router, makeExpressCallback });

const services = Object.freeze({
  routes,
});

module.exports = services;

module.exports = {
  routes,
};
//console.log("ROUTES")
module.exports = router;