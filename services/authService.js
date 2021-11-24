const jwt = require('jsonwebtoken')

exports.generateToken = async data => jwt.sign(data, process.env.SECRET_TOKEN, { expiresIn: '1d' })

exports.decodeToken = async (token) => {
  const data = await jwt.verify(token, process.env.SECRET_TOKEN)
  return data
}

exports.authorize = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({
      message: 'RESTRICT ACCESS'
    })
  } else {
    jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
      if (error) {
        res.status(401).json({
          message: 'INVALID TOKEN'
        })
      } else {
        next()
      }
    })
  }
}