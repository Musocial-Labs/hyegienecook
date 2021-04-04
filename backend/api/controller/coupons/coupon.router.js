const express = require('express')
const { createCoupons, getAllCoupons } = require('./coupon.controller')
const router = express.Router()
const multer = require('multer')

const upload = multer()

router.post("/", upload.none(), createCoupons)
router.get("/", getAllCoupons)

module.exports = router