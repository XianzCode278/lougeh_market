const loginUser = ({ make_logins, loginDB}) => {
    return async function post(info) {
      let data = await make_logins(info); // entity
  
      data = {
          username: data.getUsername(),
            password: data.getPassword()
      };
    const res1 = await loginDB.queryloginUser({ data })
  
    if(!res1){
      msg1 = `Username or Password is Correct`
      return msg1;
     } 

    const {id} = res1
    const res = await loginDB.insertLogin({ data, id });
      let msg = `Login not recorded.`;
    
      if (res) { 
       msg = `Login SuccessFully.`;
      return msg;
      } else {
        throw new Error(msg);
      }
    };
  };
  
  module.exports = loginUser;
  