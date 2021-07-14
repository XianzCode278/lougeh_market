
//const auth = require('basic-auth')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const isAuthentication = require('./JWToken')
//-----------------------------
const isAuthentications = isAuthentication({jwt,dotenv})
//const isAuthentications = isAuthentication({auth,dotenv})

const services = Object.freeze({
    isAuthentications
})

module.exports = services
module.exports = { isAuthentications }


