const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const { OAuth2Client } = require('google-auth-library')
//const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const { validationResult } = require('express-validator')

const User = require('../models/User')


exports.loaduser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
}

//@route     POST api/auth sign in

exports.signin = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { email, password } = req.body

    try {
      // See if users doesn't exist

      let user = await User.findOne({ email })

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] })
      }

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
          role: user.role
        },
      }
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: "2 days" }, 
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }

  exports.isVendor = (req, res, next) => {
      if (req.user.role === "user") {
    return res.status(403).json({
        error: 'Access denied'
    });
}
next();
  }

  exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
  return res.status(403).json({
      error: 'Access denied'
  });
}
next();
}

