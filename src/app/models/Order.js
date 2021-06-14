const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Order = new Schema(
    {
        title: { type: String, maxLength: 255 },
        price: { type: Number, maxLength: 32 },

        image: { type: String, maxLength: 255 },
        rating: { type: Number, maxLength: 2 },
    },
    {
        timestamps: true,
    },
    {
        collection: 'orders',
    }
)

module.exports = mongoose.model('Order', Order)
