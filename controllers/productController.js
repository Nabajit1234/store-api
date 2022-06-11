const Product = require("../models/productModel")

const getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async(req, res) => {
    try {
        const { productName } = req.body;
        const product = await new Product({
            productName: productName
        });
        
        product.save()
            .then((result) => {
                console.log('Product Created!');
                res.json(result);
            })
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
};


module.exports = {getProducts, createProduct};