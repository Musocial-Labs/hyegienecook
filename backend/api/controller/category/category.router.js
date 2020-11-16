const express = require('express')
const router = express.Router()
const multer = require('multer');

const { createCategories, getAllCats, getCatsById, updateCats, deleteCats } = require('./category.controller')

const upload = multer()

router.post('/', upload.none(), createCategories);

router.get('/get', getAllCats);

router.get('/get/:id', getCatsById)

router.patch('/update/:id', upload.none(), updateCats)

router.delete('/delete/:id', deleteCats)

module.exports = router;