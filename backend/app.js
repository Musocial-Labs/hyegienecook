const express = require('express');
const app = express()

const categoryRouter = require('./api/controller/category/category.router')
const productRouter = require('./api/controller/product/product.router')
const orderRouter = require('./api/controller/order/order.router')
const addressRouter = require('./api/controller/address/address.router')
const usersRouter = require('./api/controller/users/users.router')
const couponRouter = require('./api/controller/coupons/coupon.router')
const bannerRouter = require('./api/controller/banner/banner.router')
const ExpensesRouter = require('./api/controller/expenses/expenses.router')
const staffRouter = require('./api/controller/staff/staff.router')
const dietRouter = require('./api/controller/dietitiansession/diet.router')
const taxRouter = require('./api/controller/tax/tax.router')

app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
app.use('/address', addressRouter)
app.use('/users', usersRouter)
app.use('/coupon', couponRouter)
app.use('/banner', bannerRouter)
app.use('/expenses', ExpensesRouter)
app.use('/staff', staffRouter)
app.use('/diet', dietRouter)
app.use('/tax', taxRouter)


app.listen(3000, () => {
    console.log('your server has been started on port 3000')
})