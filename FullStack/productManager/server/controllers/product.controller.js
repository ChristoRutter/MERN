const Product = require('../models/product.model')


module.exports = {
    findAllProducts: (req, res) => {
        Product.find()
            .then((allproduct) =>{
                console.log(allproduct)
                res.json(allproduct)
            })
            .catch((err) =>{
                console.error(err)
                res.json({message: 'Something went wrong', error: err})
            })

    },

    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) =>{
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err) =>{
                console.log("Something went wrong")
                res.status(400).json(err)
            })
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) =>{
                console.log(oneProduct)
                res.json(oneProduct)
            })
            .catch((err) =>{
                console.log("Something went wrong")
                res.json({message: 'Something went wrong', error: err})
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deleteProduct)=>{
                console.log(deleteProduct)
                res.json(deleteProduct)

            })
            .catch((err)=>{
                console.log("Delete Fail")
                res.json({message: 'Delete Fail', error: err})
            })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updateProduct)=>{
                console.log(updateProduct)
                res.json(updateProduct)
            })
            .catch((err)=>{
                console.log("Update Fail")
                res.status(400).json(err)
            })

    }
}