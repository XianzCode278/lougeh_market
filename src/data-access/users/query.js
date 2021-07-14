const { User_TBL } = require('../../../models')

const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
                            insertUser,
                           selectOneUser,
                           selectAllUser,
                           querydeleteUser,
                           queryUpdateUser,
                           checkUser

                         })

                         async function queryUpdateUser ({data,userID}) {

                                const updateUser = await User_TBL.update(data,{where:{id:userID}})
                                return updateUser
            
                        }

                        async function checkUser ({data}){
                            const{UserName} = data
                            const selectUser = await User_TBL.findOne({
                                where: {UserName}
                            })
                         
                            return(selectUser)
                        }

            async function insertUser ({data}) {
                  
                    const {FName, UserName, UserRole, UserStatus}  = data
                    const user_create = await User_TBL.create({FName, UserName, PassWord: UserName, UserRole, UserStatus})
                  
                         return user_create
                   
                
            }

            async function selectOneUser ({id}){
                const selectUser = await User_TBL.findOne({
                        where: {id}
                }).catch (err => {
                    if(err){
                        res.statusCode(400)
                    }
                })
                return selectUser
            }

            async function selectAllUser ({req, res}){
                const selectAll = await User_TBL.findAll({order:[['id','DESC']]}).catch((err) => {
                    if(err){
                        console.log(err)
                    } else {
                        res.send(selectAll)
                    }
                })
                return selectAll
            }



            async function querydeleteUser ({id}){

                const UserStatus = "Deactivate"
                const UpdateStatus = await User_TBL.findOne({where:{id}})
                UpdateStatus.UserStatus = UserStatus
                const upt = await UpdateStatus.save()
                return upt
            }

          

}

module.exports = query