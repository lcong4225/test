const Order = require('../models/Order')
const { mongooseToObject } = require('../../util/mongoose')
const { LocalConvenienceStoreTwoTone } = require('@material-ui/icons')
class OrderController {
    //[get] /payment order
    order(req, res, next) {
        Order.find({}, function (err, details) {
            if (!err) {
                res.json(details)
                return
            }
            res.status(400).json({ error: 'ERROR!' })
        })
    }
    //post order
    create(req, res, next) {
        Order.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    }
}

module.exports = new OrderController()
