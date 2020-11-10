const express = require('express')
const router = express.Router()
//const { check } = require('express-validator')
const checkObjectId = require('../../middleware/checkObjectId.js')

const auth = require('../../middleware/auth')
const { isAdmin } = require('../../controllers/auth')

const cloudinary = require('../../config/cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'Foodtime',
		allowedFormats: ['jpg', 'png'],
		transformation: [{ width: 500, height: 500, crop: 'limit' }],
	},
})

const parser = multer({ storage: storage })

const {
	getProfile,
	getProfileById,
	getCurrentProfile,
  createProfile,
  addImage,
	deleteProfile,
	purchaseHistory
} = require('../../controllers/profile')

router.get('/all', auth, isAdmin, getProfile)
router.get('/user/:user_id', checkObjectId('user_id'), getProfileById)
router.get('/me', auth, getCurrentProfile)
router.post('/', 	 auth, createProfile)
router.put('/', parser.single('image'), auth, addImage)
router.get('/orders/by/user/:profileid', auth, purchaseHistory);
router.delete('/', auth, deleteProfile)
module.exports = router