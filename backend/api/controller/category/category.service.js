const mysql = require('../../module/database')
module.exports = ({
    createCategory: (req, res) => {
        mysql.query(`INSERT INTO category (catName,parentCategoryId) VALUES (?,?);`, [req.body.catName, req.body.parentCatId], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },

    // get all category 
    getAllCat: (res) => {
        mysql.query(`SELECT * FROM  category`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    // get category by id 
    getCatById: (req, res) => {
        mysql.query(`SELECT * FROM  category where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },
    //update cat by id
    updateCat: (req, res) => {
        mysql.query(`update category set ?  where id=?`, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },

    //delete cat by id
    deleteCat: (req, res) => {
        mysql.query(`delete from category where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})