const { saveUser, validateUser } = require('../bo/usersBo')
const { Status } = require('../models/status')

const registerUserHandler = async (req, res) => {
    const userData = req.body
    console.log(userData)

    try {
        const result = await saveUser(userData)
        res.status(201).json(result)
    } catch (e) {
        res.status(500).json(new Status(e.message))
    }
}

const authenticateUserHandler = async (req, res) => {
    const userData = req.body
    console.log(userData)
    try {
        const result = await validateUser(userData)
        res.status(200).json(result)
    } catch (e) {
        res.status(500).json(new Status(e.message))
    }
}

module.exports = {
    registerUserHandler,
    authenticateUserHandler
}