const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const {
  loaduser,
  signin,
} = require("../../controllers/auth");

const auth = require('../../middleware/auth')


router.get("/", auth, loaduser);

router.post("/signin",   [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
], signin);


module.exports = router
