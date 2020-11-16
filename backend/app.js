const express = require('express');
const app = express()


const categoryRouter = require('./api/controller/category/category.router')
    // app.use(express.json({ extended: true }))
app.use('/category', categoryRouter)

app.listen(3000, () => {
    console.log('your server has been started on port 3000')
})