const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers, loginUsers, getAllUsers, getUsersByID, updateUsers, deleteUsers } = require('./users.controller')
const { checkMobile } = require('../../middleware/users/users.mobile_unique')

const storage = multer.diskStorage({
    destination: './upload/users_img',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/', upload.single('profilePicUrl'), checkMobile, createUsers)

router.post('/login', upload.none(), loginUsers)

router.get('/get', getAllUsers)

router.get('/get/:id', getUsersByID)

router.patch('/update/:id', upload.single('profilePicUrl'), updateUsers)

router.delete('/delete/:id', deleteUsers)

module.exports = router