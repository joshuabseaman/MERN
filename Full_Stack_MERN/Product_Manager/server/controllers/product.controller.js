const { Product } = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }))
}

module.exports.getOneProduct = (req, res) => {
    const paramsId = req.params.id;
    Product.findOne({ _id: paramsId })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

module.exports.updateProduct = (req, res) => {
    const paramsId = req.params.id;
    const updatedProduct = req.body;
    Product.findOneAndUpdate(
        {_id: paramsId},
        updatedProduct,
        {new: true, runValidators: true}
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    const paramsId = req.params.id;
    Product.findOneAndDelete({_id: paramsId})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err => res.status(400).json(err))
}