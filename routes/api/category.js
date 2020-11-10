const express = require('express')
const router = express.Router()

const auth = require('../../middleware/auth')
const { isAdmin } = require('../../controllers/auth')


const {
createCategory,
getCategory,
getCategoryById,
deleteCategory,
editCategory
} = require('../../controllers/category')

router.post('/', auth, isAdmin, createCategory)
router.get('/all', getCategory)
router.get('/:id', getCategoryById)
router.delete('/:id', auth, isAdmin, deleteCategory)
router.put('/:id', auth, isAdmin, editCategory)
//router.get("/test", test)

module.exports = router
