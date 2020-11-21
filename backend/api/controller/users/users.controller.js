const { createUser } = require('./users.service')
const { hashSync } = require('bcrypt')
module.exports = ({
    createUsers: (req, res) => {
        if (req.body.password == req.body.cpassword) {
            req.body.password = hashSync(req.body.password, 10)
            createUser(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "successfully regestred"
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "password did't match"
            })
        }
    }
})