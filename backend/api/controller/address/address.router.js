const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createAddresses, getAddressesById, getAllAddresses, updateAddresses, deleteAddresses } = require('./address.controller')

const upload = multer()

router.post('/', upload.none(), createAddresses)

router.get('/get', upload.none(), getAllAddresses)

router.get('/get/:id', upload.none(), getAddressesById)

router.patch('/update/:id', upload.none(), updateAddresses)

router.delete('/delete/:id', upload.none(), deleteAddresses)

module.exports = router