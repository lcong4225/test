const express = require('express')
const router = express.Router()

const productController = require('../app/controllers/ProductController')

router.use('/api', productController.product)
router.use('/api1', productController.create)

module.exports = router
