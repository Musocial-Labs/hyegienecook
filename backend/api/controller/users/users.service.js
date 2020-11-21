const mysql = require('../../module/database')
module.exports = ({
    createUser: (req, res) => {
        mysql.query(`INSERT INTO users (name,ipaddress,incart,mobile,email,profilePicUrl, regTime, lastlogin,deviceType, password,secretKey, walletBalance, addressIDS, lastTokenTransactions) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);`, [req.body.name, req.body.ipaddress, req.body.incart, req.body.mobile, req.body.email, req.file.path, req.body.regTime, req.body.lastlogin, req.body.deviceType, req.body.password, req.body.secretKey, req.body.walletBalance, req.body.addressIDS, req.body.lastTokenTransactions], (err, data) => {
            if (err) {
                console.log(err)
                return res(err)
            } else {
                return res(null, data)
            }
        })
    }
})