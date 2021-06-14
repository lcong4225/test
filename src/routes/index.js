const productsRouter = require('./products')
const odersRouter = require('./orders')

function route(app) {
    app.use('/', productsRouter)
    app.use('/', odersRouter)
}

module.exports = route
