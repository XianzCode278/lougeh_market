const loginUser = require ('./login')
//const moment = require('moment')
 
test('Login with no Username', async() => {
        return await loginUser.login("","1234").catch(err => {
            expect(err.message).toBe("Please Enter Username.")
        })
})

test('Login with no Password', async() => {
    return await loginUser.login("Admin","").catch(err => {
        expect(err.message).toBe("Please Enter Password.")
    })
})

test('Login Username or Password is Incorrect', async() => {
    return await loginUser.login("Admin","1111").catch(err => {
        expect(err.message).toBe("Username or Password is Correct")
    })
})


test('User Successfully Login', async() => {
    return await loginUser.login("admin","admin")
        expect(result).toBe("Logins SuccessFully")
    
})
