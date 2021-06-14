const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Payment = new Schema(
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

module.exports = mongoose.model('Payment', Payment)
