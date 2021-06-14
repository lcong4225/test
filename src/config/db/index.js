const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://test:244466666@cluster0.ntmsv.mongodb.net/amz_clone',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }
        )
        console.log('Connect seccessfully!!!')
    } catch (error) {
        console.log('Connect fail!!!')
    }
}
module.exports = { connect }
