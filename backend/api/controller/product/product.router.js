const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createProducts, getAllProducts, getProductsById, updateProducts, deleteProducts } = require('./product.controller')

const storage = multer.diskStorage({
    destination: './upload/product_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('productImage')

router.post('/', upload, createProducts);

router.get('/get', getAllProducts)

router.get('/get/:id', getProductsById)

router.patch('/update/:id', upload, updateProducts)

router.delete('/delete/:id', deleteProducts)

module.exports = router;