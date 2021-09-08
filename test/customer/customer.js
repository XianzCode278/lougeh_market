const axios = require ('axios')

const customerGroup = {

        customerCreate: (CusName, CusAddress, CusContact, token) => {
            return axios({
                method: 'POST',
                url:`localhost:5005/customer`,
                headers: {
                    Bearer: token
                }, 
                data: {
                    CusName,
                    CusAddress,
                    CusContact
                }
            }) 
                .then(res => res)
                .catch(err => err.response)
        }
}
