const express = require('express');
const app = express()


const categoryRouter = require('./api/controller/category/category.router')
const productRouter = require('./api/controller/product/product.router')
const orderRouter = require('./api/controller/order/order.router')
const addressRouter = require('./api/controller/address/address.router')
const usersRouter = require('./api/controller/users/users.router')

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/address', addressRouter)
app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('your server has been started on port 3000')
})