const addUser = ({ make_users, userDB }) => {
    return async function post(info) {
      let data = await make_users(info); // entity
  
      data = {
        FName: data.getFullname(),
        UserName: data.getUsername(),
        UserRole: data.getUserrole(),
        UserStatus: data.getUserStatus(),
      };
      const takenUser = await userDB.checkUser({data})
      if(takenUser) throw new Error (`Username is already taken please create new one`)
      
      const res = await userDB.insertUser({ data });
      if (res) {
        return `User has been added successfully.`;
      } else {
        throw new Error(`Error on inserting employee, please try again.`);
      }
    };
  };
  
  module.exports = addUser;
  