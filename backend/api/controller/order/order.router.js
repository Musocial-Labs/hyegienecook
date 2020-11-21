const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createOrders, getAllOrders, getOrdersById, updateOrders, deleteOrders } = require('./order.controller')

const upload = multer()

router.post('/', upload.none(), createOrders)

router.get('/get', getAllOrders)

router.get('/get/:id', getOrdersById)

router.patch('/update/:id', upload.none(), updateOrders)

router.delete('/delete/:id', deleteOrders)

module.exports = router