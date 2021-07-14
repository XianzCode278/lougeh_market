const { make_logins } = require('../../entities/login/app')


const loginDB = require('../../data-access/login/app')

const loginUser = require('./login')

const loginUsers = loginUser({make_logins, loginDB})


const services = Object.freeze ({ loginUsers })

module.exports = services
module.exports = { loginUsers }