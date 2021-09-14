const { login_TBL, User_TBL } = require('../../../models')
const jwt = require('jsonwebtoken')
const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                         queryloginUser,      
                         insertLogin,
                                    
                         })


            async function queryloginUser ({data}){
                const {username, password} = data
                const findUSer = await User_TBL.findOne({
                        where: {UserName: username, PassWord: password}
                }).catch (err => {
                    if(err){
                       throw new Error("Error :", err)
                    }
                })
                return findUSer
            }

            async function insertLogin ({data, id}) {
           
                const {username, password } = data; 
                const userDatails = {
                    username, password
                  }

                    const token = jwt.sign({ userDatails  }, process.env.SECRET_KEY, {expiresIn: '4hr'})
                    console.log(`TOKEN: ${token}`)
                    const todayDate = new Date()
                    const user_login = await login_TBL.create({loginDate: todayDate, UserTBLId: id, JWToken: token})
               
                //  console.log("User_login:", user_login.id)
                    const returnUser = await login_TBL.findOne({where: {id: user_login.id}, include: {model:User_TBL, attributes:['FName', 'UserName', 'UserRole','UserStatus']}})
                   return returnUser
               

        }

      

   

}

module.exports = query