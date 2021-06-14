const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema(
    {
        title: String,
        price: Number,
        image: String,
        rating: Number,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', Product)
