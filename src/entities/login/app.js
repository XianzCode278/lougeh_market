const make_login = require('./make_login')

const make_logins = make_login()


const services = Object.freeze({ make_logins })

module.exports = services
module.exports = { make_logins }