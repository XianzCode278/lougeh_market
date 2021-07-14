const { loginUsers } = require('../../use-cases/login/app')

const userLogin = require('./login')

const userLogins = userLogin({ loginUsers })

const services = Object.freeze ({
     userLogins

})

module.exports = services
module.exports = { userLogins }