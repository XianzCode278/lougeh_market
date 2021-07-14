const {
    addUsers,
    retrieveUsers,
    deleteUsers,
    userUpdates,
  } = require("../../use-cases/user/app");
//const aa = require("../../migrations")
    const userAdd = require("./insert_user");
    const userRetrieve = require("./retrieve_user")
     const userDelete = require("./delete_user")
     const userUpdate = require("./update_user")


     const userAdds = userAdd({ addUsers });
    const userRetrieves = userRetrieve({ retrieveUsers });
    const userDeletes = userDelete({ deleteUsers });
    const userUpdated = userUpdate({userUpdates})

 
  const services = Object.freeze({
    userAdds,
    userRetrieves,
    userDeletes,
    userUpdated

  });
  
  module.exports = services;
  module.exports = {
    userAdds,
    userRetrieves,
    userDeletes,
    userUpdated
   };
  