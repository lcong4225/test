const express = require('express')
const router = express.Router()

const orderController = require('../app/controllers/OrderController')

// router.get('/create', orderController.order)
router.post('/store', orderController.create)
router.get('/order', orderController.order)

module.exports = router
