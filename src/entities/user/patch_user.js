const patchUser = () => {
    return function make( {id,FName,UserName,UserRole} = {}) {
 //console.log(`USER ID: ${id} USERNAME: ${username} PASSPASSWORD : ${password}`)
      if (!id) throw new Error("Please enter user ID.");
      // if (!FName) throw new Error("Please provide Fullname."); 
      // if (!UserName) throw new Error("Please provide Username.");
      // if (!PassWord) throw new Error("Please provide Password."); 
      // if (!UserRole) throw new Error("Please provide UserROle.");

      return Object.freeze({
        getID:() => id,
        getFullname: () => FName,
        getUsername: () => UserName,
        getPassword: () => UserName,
        getUserrole: () => UserRole,
      
      });
    };
  };
  
  module.exports = patchUser;
  