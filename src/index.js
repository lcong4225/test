const express = require('express')

const cors = require('cors')
const path = require('path')
const morgan = require('morgan')

const methodOverride = require('method-override')

const route = require('./routes')
//db and connect
const db = require('./config/db')

db.connect()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

//middleware xu ly form v s

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(methodOverride('_method'))
app.use(morgan('combined'))
route(app)

//deploy
app.use(express.static(path.join(__dirname, 'build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//route init
// app.use('/', router)

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
