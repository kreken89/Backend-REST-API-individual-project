const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1d' })
}

exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        // req.userData = jwt.verify(token, secretKey); Behöver vi ha ett helt object här? nej men kanske senare för orderraderna.
        req.userId = jwt.verify(token, secretKey)._id;
        next()
    } catch  {
        return res.status(401).json({
            message: 'You need to login in order to get your token, access restricted'
        })
    }
}