const make_login= () => {

    return function make({ username,password } = {}) {
         if(!username) throw new Error("Please Enter Username.");
         if (!password)throw new Error("Please Enter Password.");    
   //      if (!Quantity) throw new Error("Please provide Address.");

       //  console.log(` USERNAME: ${username} PASSPASSWORD : ${password}`)
         return Object.freeze({
           getUsername: () => username,
           getPassword: () => password,

   
         });
       };
     };
     
     module.exports = make_login;
     