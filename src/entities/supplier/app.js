const make_supplier = require("./make_supplier");
const patch_Supplier = require("./patch_supplier");
//const patchUser = require("./patch_user");
// ########
const make_suppliers = make_supplier();
const patch_Suppliers = patch_Supplier()
//const patchUsers = patchUser();
// ########
const services = Object.freeze({ make_suppliers,patch_Suppliers });

module.exports = services;
module.exports = { make_suppliers, patch_Suppliers };
