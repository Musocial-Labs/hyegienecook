const { createCoupon,getAllCoupon } = require('./coupon.service')
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
    },
    getAllCoupons: (req, res) => {
        console.log(req.body)
        getAllCoupon(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching" + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    
})