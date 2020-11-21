const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers } = require('./users.controller')

const storage = multer.diskStorage({
    destination: './upload/users_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
}).single('profilePicUrl')

router.post('/', upload, createUsers)

module.exports = router