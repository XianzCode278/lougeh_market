const {
    make_users,
    patchUsers,
} = require('../../entities/user/app')

const userDB = require('../../data-access/users/app')


// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
const addUser = require('./insert')
const retrieveUser = require('./retrieve')
const deleteUser = require('./delete')
const userUpdate = require('./update')
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

const addUsers = addUser({ make_users, userDB })
const retrieveUsers = retrieveUser({ userDB })
const deleteUsers = deleteUser({ userDB })
const userUpdates = userUpdate({patchUsers, userDB })
// HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

const services = Object.freeze ({
    addUsers,
    retrieveUsers,
    deleteUsers,
    userUpdates

})

module.exports = services
module.exports = {
    addUsers,
    retrieveUsers,
    deleteUsers,
    userUpdates
}