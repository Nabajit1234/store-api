const Order = require("../models/orderModel")

const getOrders = async(req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        console.log(error);
    }
};

const createOrder = async(req, res) => {
    try {
        const { userId, productId, status } = req.body;
        const order = await new Order({
            userId: userId,
            productId: productId,
            status: status
        });

        order.save()
            .then((result) => {
                console.log('Order Created!');
                res.json(result);
            })
            .catch((err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
};


module.exports = {getOrders, createOrder};