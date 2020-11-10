const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { isAdmin } = require('../../controllers/auth')
const auth = require('../../middleware/auth')

const {
	//test,
	signup,
	verifyaccount,
	forgotPassword,
	resetPassword,
	editUser,
	getAllUsers,
	suspend,
	unsuspend
} = require('../../controllers/user')

router.post(
	'/signup',
	[
		check('lastName', 'Last Name is required').not().isEmpty(),
		check('firstName', 'First Name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
	],
	signup
)

router.post('/verifyaccount/:token', verifyaccount)
router.put('/forgotpassword', [check('email', 'Please include a valid email').isEmail()], forgotPassword)
router.put( '/resetpassword/:token', [check('newPassword').isLength({ min: 6 })], resetPassword)
router.put( '/editUser', auth, editUser)
router.get('/all', auth, isAdmin, getAllUsers)
router.put('/suspend', auth, isAdmin, suspend)
router.put('/unsuspend', auth, isAdmin, unsuspend)

//router.get("/test", test)

module.exports = router
