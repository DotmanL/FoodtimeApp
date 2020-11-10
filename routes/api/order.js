const express = require('express')
const router = express.Router()
//const { check } = require('express-validator')
//const checkObjectId = require('../../middleware/checkObjectId.js')

const auth = require('../../middleware/auth')
const { isAdmin } = require('../../controllers/auth')

const { ProfileById } = require('../../controllers/profile')

const { addOrderToHistory } = require('../../controllers/profile')

const { reduceItemQuantity } = require('../../controllers/products')

const { createOrder, listOrdersByUser, getStatus, updateOrderStatus } = require('../../controllers/order')

router.post('/create/:userId', auth, ProfileById, addOrderToHistory, reduceItemQuantity, createOrder)

router.get('/order/list/:profileId', auth, isAdmin, listOrdersByUser)

router.get('/order/status/:profileId', auth, isAdmin, getStatus)

router.put('/order/:orderId/status/:profileId', auth, isAdmin, updateOrderStatus)

module.exports = router
