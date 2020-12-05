const mysql = require('../../module/database')
module.exports = ({
    createCoupon: (req, res) => {
        mysql.query("INSERT INTO `coupons` (`couponCode`, `expiryDate`, `numberOfTimesCanBeUsed`, `allowOnlyNewUser`) VALUES (?,?,?,?);", [req.body.couponCode, req.body.expiryDate, req.body.numberOfTimesCanBeUsed, req.body.allowOnlyNewUser], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})