const dotenv = require("dotenv");
const pg = require("pg");
//const jwt = require("jsonwebtoken")
// ##############
const connect = require("./connection");
// ##############
const connects = connect({ dotenv, pg });
// ##############
const services = Object.freeze({ connects,dotenv });


module.exports = services;
module.exports = { connects, dotenv };
