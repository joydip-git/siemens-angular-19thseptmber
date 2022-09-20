const { Status } = require('../models/status')
const { readUsers, writeUser } = require('../dao/usersDao')
const { createToken } = require("../middleware/authmiddleware")

const generateResponse = (res, user) => {
    if (res)
        return new Status("User saved successfully", user)
    else
        return new Status("something went wrong...could not save user")
}
const saveUser = async (user) => {
    try {
        const users = await readUsers()
        console.log(users)
        if (users) {
            if (users.length > 0) {
                const found = users.find(u => u.username === user.username)
                if (found) {
                    return new Status("user already exists")
                } else {
                    users.push(user)
                    const res = await writeUser(users)
                    return generateResponse(res, user)
                }
            } else {
                users.push(user)
                const res = await writeUser(users)
                return generateResponse(res, user)
            }
        } else
            return new Status("something went wrong..data could not be saved")
    }
    catch (e) {
        throw e
    }
}
const validateUser = async (user) => {
    try {
        const users = await readUsers();
        const found = users.find(u => u.username === user.username && u.password === user.password)
        console.log(found)
        if (!found) {
            return new Status('not a valid user')
        } else {
            return new Status("valid user", createToken(found))
        }
    }
    catch (e) {
        throw e
    }
}

module.exports = {
    saveUser,
    validateUser
}