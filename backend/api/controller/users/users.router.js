const express = require('express')
const router = express.Router()
const multer = require('multer')

const { createUsers, loginUsers, getAllUsers, getUsersByID, updateUsers,updateCarts, deleteUsers } = require('./users.controller')

// middleware

const { addUserValidation, userValidationResult, fileUploadValidation } = require('../../middleware/users/validation')

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

router.post('/', upload.single('profilePicUrl'), fileUploadValidation, addUserValidation, userValidationResult, checkMobile, createUsers)

router.post('/login', upload.none(), loginUsers)

router.get('/', getAllUsers)

router.get('/:id', getUsersByID)

router.patch('/:id', upload.single('profilePicUrl'), fileUploadValidation, checkMobile, updateUsers)

router.patch('/updatecart/:id', upload.none(),updateCarts
)

router.delete('/:id', deleteUsers)

module.exports = router