const axios = require ('axios')

const loginUserData = {
        login: (username, password) => {
            return axios({
                method: 'POST',
                url:`localhost:5005/login`,
                data: {
                    username,
                    password    
                }
            }) 
                .then(res => res)
                .catch(err => err.response)
        }
}
module.exports = loginUserData