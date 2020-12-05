const { createCoupon } = require('./coupon.service')
module.exports = ({
    createCoupons: (req, res) => {
        console.log(req.body)
        createCoupon(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while inserting " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    }
})