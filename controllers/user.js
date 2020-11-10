const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Email = require('email-templates');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const _ = require('lodash');
const nodemailerSendgrid = require('nodemailer-sendgrid');
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//get all users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(
      {},
      { password: 0, __v: 0, resetPasswordLink: 0 }
    ).sort({ date: -1 });

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong');
  }
};

//route     POST api/users, sign up, Public

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }

  const {
    lastName,
    firstName,
    email,
    password,
    phoneNumber,
    role,
    city,
    restaurant,
    suspended,
  } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({
      lastName,
      firstName,
      email,
      password,
      city,
      phoneNumber,
      restaurant,
      role: role || 'customer',
      suspended: suspended || 'false',
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    const payload = {
      id: user.id,
      lastName,
      firstName,
      email,
      role,
      city,
      phoneNumber,
      restaurant,
      suspended,
      password: user.password,
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: '2 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });

        const transport = {
          apiKey: process.env.SENDGRID_API_KEY,
        };

        const transporter = nodemailer.createTransport(
          nodemailerSendgrid(transport)
        );
        transporter.verify((error, success) => {
          if (error) {
            console.error(error);
          } else {
            console.log(success);
          }
        });

        const email = new Email({
          message: {
            from: process.env.THE_EMAIL,
            subject: `Account Activation link`,
          },
          transport: transporter,
          send: true,
          preview: false,
        });
        email
          .send({
            template: 'verify',
            message: {
              to: user.email,
            },
            locals: {
              lastName: lastName,
              firstName: firstName,
              token: token,
              url: `${process.env.CLIENT_URL}`,
            },
          })
          .then(() => console.log('email has been sent!'));
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.suspend = async (req, res) => {
  const { _id } = req.body;

  const userFields = {
    _id,
    suspended: 'true',
  };
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.body },
      { $set: userFields },
      { new: true, upsert: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong suspend');
  }
};

exports.unsuspend = async (req, res) => {
  const { _id } = req.body;
  const userFields = {
    _id,
    suspended: 'false',
  };
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.body },
      { $set: userFields },
      { new: true, upsert: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something went wrong suspend');
  }
};

exports.editUser = async (req, res) => {
  const { lastName, firstName, phoneNumber, city } = req.body;

  const userFields = {
    _id: req.user.id,
    lastName,
    firstName,
    phoneNumber,
    city,
  };
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: userFields },
      { new: true, upsert: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route     POST api/verifyaccount
exports.verifyaccount = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.jwtSecret, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          error: 'Expired link. Signup again',
        });
      }

      const {
        lastName,
        firstName,
        email,
        password,
        phoneNumber,
        role,
        city,
        restaurant,
        suspended,
      } = decoded;
      User.findOne({ email }).exec((err, user) => {
        if (user) {
          return res
            .json(400)
            .json({ error: 'User with this mail exists already' });
        }

        let newUser = new User({
          lastName,
          firstName,
          email,
          password,
          phoneNumber,
          role,
          suspended,
          city,
          restaurant,
        });

        newUser.save((err, user) => {
          if (err) {
            console.log('activation error', err);
            return res.status(401).json({
              error: 'Error saving user in database. Try signup again',
            });
          }
          return res.json({
            message: 'Signup success. Welcome to Foodtime.',
          });
        });
      });
    });
  } else {
    return res.json({
      message: 'Something went wrong. Try again.',
    });
  }
};

// @route     Put api/forgotpassword

exports.forgotPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const payload = {
      id: user.id,
      firstName: user.firstName,
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: '2 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });

        const transport = {
          apiKey: process.env.SENDGRID_API_KEY,
        };

        const transporter = nodemailer.createTransport(
          nodemailerSendgrid(transport)
        );
        transporter.verify((error, success) => {
          if (error) {
            console.error(error);
          } else {
            console.log(success);
          }
        });

        const email = new Email({
          message: {
            from: process.env.THE_EMAIL,
            subject: `Password Reset link`,
          },
          transport: transporter,
          send: true,
          preview: false,
        });

        return user.updateOne({ resetPasswordLink: token }, (err, success) => {
          if (err) {
            return res.status(400).json({
              error:
                'Database connection error on user password forgot request',
            });
          }
          email
            .send({
              template: 'reset',
              message: {
                to: user.email,
              },
              locals: {
                firstName: user.firstName,
                token: token,
                url: `${process.env.CLIENT_URL}`,
              },
            })
            .then(() => console.log('email has been sent!'));
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Unable to reset password');
  }
};

// @orute     Put api/resetpassword/:token
// @desc     reset password
// @access   Public

exports.resetPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { resetPasswordLink, newPassword } = req.body;

  try {
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, process.env.jwtSecret, function (
        err,
        decoded
      ) {
        if (err) {
          return res.status(400).json({
            error: 'Expired link. Try again',
          });
        }

        User.findOne({ resetPasswordLink }, (err, user) => {
          if (err || !user) {
            return res.status(400).json({
              error: 'Something went wrong. Try later',
            });
          }

          const updatedFields = {
            password: newPassword,
            resetPasswordLink: '',
          };

          const salt = bcrypt.genSaltSync(10);
          updatedFields.password = bcrypt.hashSync(newPassword, salt);

          user = _.extend(user, updatedFields);

          user.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: 'Error resetting user password',
              });
            }
            res.json({
              message: `Great! Now you can Sign in with your new password`,
            });
          });
        });
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
