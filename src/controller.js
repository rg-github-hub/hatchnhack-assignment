const service = require('./services');
const dto = require('./dtos');
const createOrder = async (req, res) => {
    try {
        const orderDTO = req.body;
        const order = await service.createOrder(orderDTO);
        res.send({ message: 'Order created successfully', order });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const viewOrder = async (req, res) => {
    try {
        const order = await service.viewOrder(req.params.orderId);
        res.send({ order });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const commitOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const finalPrice = req.body.finalPrice;
        await service.commitOrder(orderId, finalPrice);
        res.send({ message: 'Order committed successfully' });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

// export 
module.exports = {
    createOrder,
    viewOrder,
    commitOrder
};