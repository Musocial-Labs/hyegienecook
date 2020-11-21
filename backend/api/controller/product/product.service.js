const mysql = require('../../module/database')
module.exports = ({
    createProduct: (req, res) => {
        mysql.query(`INSERT INTO products (catId, menuName, description, calories, protein, fat, carbohydrates, fibre, productImage, costPrice, regularPrice, sellPrice) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);`, [req.body.catId, req.body.menuName, req.body.description, req.body.calories, req.body.protein, req.body.fat, req.body.carbohydrates, req.body.fibre, req.file.path, req.body.costPrice, req.body.regularPrice, req.body.sellPrice], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getAllProduct: (res) => {
        mysql.query(`select * from products`, [], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    },
    getProductById: (req, res) => {
        mysql.query(`select * from products where id=?`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data[0])
        })
    },
    updateProduct: (req, res) => {
        mysql.query(`update products set ? where id=?;`, [req.body, req.params.id], (err, data) => {
            if (err) {
                return res(err)
            } else {
                return res(null, data)
            }
        })
    },
    deleteProduct: (req, res) => {
        mysql.query(`delete from products where id=?;`, [req.params.id], (err, data) => {
            if (err) {
                return res(err)
            }
            return res(null, data)
        })
    }
})