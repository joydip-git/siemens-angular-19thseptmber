const jwt = require('jsonwebtoken')
const { Status } = require('../models/status')
const dotenv = require('dotenv')

dotenv.config()

const createToken = (user) => {
    const payload = { subject: user._id }
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 300, })
    return token
}

const verifyToken = (req, res, next) => {
    console.log('in verify token')
    if (!req.headers.authorization) {
        return res.status(401).json(new Status('no authization header'))
    }
    let token = req.headers.authorization.split(' ')[1]

    if (token === 'null') {
        return res.status(401).json(new Status('no token found'))
    }
    try {
        let payload = jwt.verify(token, process.env.SECRET_KEY)
        if (!payload) {
            return res.status(401).json(new Status('no payload found:unauthorized request'))
        }
        req.userId = payload.subject
    } catch (error) {
        console.log(error)
        return res.status(401).json(new Status(error.message))
    }
    next()
}

module.exports = {
    createToken,
    verifyToken
}