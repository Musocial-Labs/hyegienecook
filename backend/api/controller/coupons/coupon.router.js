const express = require('express')
const { createCoupons } = require('./coupon.controller')
const router = express.Router()
const multer = require('multer')

const upload = multer()

router.post("/", upload.none(), createCoupons)

module.exports = router