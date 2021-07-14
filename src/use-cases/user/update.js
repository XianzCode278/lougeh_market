const userUpdate = ({ patchUsers, userDB }) => {
    return async function puts(id, ...info) {
      let data = await patchUsers(id, info) // entity
      let userID = data.getID();
      data = {   
        FName: data.getFullname(),
        UserName: data.getUsername(),
        PassWord: data.getPassword(),
        UserRole: data.getUserrole(),
           }
      const res = await userDB.queryUpdateUser({ data, userID }) 
     
      if (res){         
            return `User Updated Successfully`
         } else { 
             throw new Error(`Data not Update, Problem encounter duirng the process`)
            }     
    } 
  }
  
  module.exports = userUpdate;
  