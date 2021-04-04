const mysql = require('../../module/database')
module.exports = ({
    createCoupon: (req, res) => {
        mysql.query("INSERT INTO `coupons` (`couponCode`, `expiryDate`, `numberOfTimesCanBeUsed`, `allowOnlyNewUser`,`title`,`desc`,`type`,`limit`,`amount`) VALUES (?,?,?,?,?,?,?,?,?);", [req.body.couponCode, req.body.expiryDate, req.body.numberOfTimesCanBeUsed, req.body.allowOnlyNewUser,req.body.title,req.body.desc,req.body.type,req.body.limit,req.body.amount], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAllCoupon:(req,res)=>{
        mysql.query(`select * from coupons`,[],(err,data)=>{
            if(err){
                return res(err)
            }
            else{
                return res(null,data)
            }
        })
    }
})