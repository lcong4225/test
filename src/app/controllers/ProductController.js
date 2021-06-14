const Product = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose')
class ProductController {
    //[GET] /course/:slug
    product(req, res, next) {
        Product.find({}, function (err, details) {
            if (!err) {
                res.json(details)
                return
            }
            res.status(400).json({ error: 'ERROR!' })
        })
        /* .then((movie) => {
                res.render('home', {
                    movie: mutipleMongooseToObject(movie),
                })
            })
            .catch(next) */
    }

    create(req, res, next) {
        Product.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                console.log(data)
                res.json(data)
            }
        })
    }
}

module.exports = new ProductController()
