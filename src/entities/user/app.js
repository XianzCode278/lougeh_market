const make_user = require("./make_user");
const patchUser = require("./patch_user");
// ########
const make_users = make_user();
const patchUsers = patchUser();
// ########
const services = Object.freeze({ make_users, patchUsers });

module.exports = services;
module.exports = { make_users,patchUsers  };
