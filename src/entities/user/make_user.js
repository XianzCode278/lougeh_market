const make_user = () => {

 return function make({ FName,UserName,UserRole,UserStatus } = {}) {
      if(!FName) throw new Error("Please Enter your Fullname.");
      if (!UserName)throw new Error("Please provide username.");    
      if(!UserRole) throw new Error("Please provide Role")
      if(!UserStatus)throw new Error("Please Provide UserStatus")
    //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
      return Object.freeze({
        getFullname: () => FName,
        getUsername: () => UserName,
        getUserrole: () => UserRole,
        getUserStatus: () => UserStatus
   
      });
    };
  };
  
  module.exports = make_user;
  