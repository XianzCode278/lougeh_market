const  isAuthentication = ({ jwt }) => {
    return async function auths(req, res, next) {

   const bearerHeader = req.headers["authorization"]

       if(typeof bearerHeader !== 'undefined')
       {
          // console.log("bearerHeader", typeof bearerHeader)
           const bearer = bearerHeader.split(" ")
           const bearerToken = bearer[1]
           req.token = bearerToken
           jwt.verify(req.token, process.env.SECRET_KEY, function(err){ // check token
             if(err) {          
                res.sendStatus(403)
                     }
                  else {
                  next()
              }                    
           })  
       } else {
           res.sendStatus(403)
       }
    };
  }

  
  module.exports = isAuthentication;
  