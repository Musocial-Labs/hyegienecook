    const { check, validationResult } = require('express-validator');
    const path = require('path')
    exports.addUserValidation = [
        check('name', 'name Name should not be  empty').not().isEmpty().trim(),
        check('ipaddress', 'ipaddress should not be  empty').not().isEmpty().trim(),
        check('incart', 'incart should not be  empty').not().isEmpty(),
        check('mobile', 'Enter valid mobile number').isLength({ min: 10, max: 10 }),
        check('email', 'enter valid emailID').isEmail().normalizeEmail(),
        check('password', 'password should contain 4 digit').isLength({ min: 4, max: 4 }),
        check('cpassword', 'cpassword should not be  empty').not().isEmpty(),
        // check('profilePicUrl', 'Mother occupation should not be empty').not().isEmpty(),
    ];

    exports.userValidationResult = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.mapped() });
        }
        next();
    }

    exports.fileUploadValidation = (req, res, next) => {
        const expectedFileType = ['.png', '.jpg', '.jpeg']
        if (!req.file) {
            console.log('file is empty');
            res.json({
                success: 0,
                msg: " image is required"
            })
        }
        const fileExtension = path.extname(req.file.originalname)
        if (!expectedFileType.includes(fileExtension)) {
            return res.json({ success: 0, msg: "only jpeg|png|jpg extension image you can upload " })
        }
        next()
    }