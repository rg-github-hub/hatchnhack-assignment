// Function to create an order
const { Order,
    Product,
    OrderProduct,
    Vendor} = require('./models');

const {OrderDTO, ProductDTO} = require('./dtos');
const createOrder = async (orderDTO) => {
    try {
        // Create the order in the database
        const order = await Order.create({
            orderId: orderDTO.orderId,
            customerName: orderDTO.customerInfo.name,
            customerEmail: orderDTO.customerInfo.email,
            customerPhone: orderDTO.customerInfo.phone
        }, {
            include: [{
                model: OrderProduct,
                include: [{
                    model: Product,
                    include: [Vendor]
                }]
            }]
        });

        // Assign the products to the order and find the vendor with the lowest price for each product
        if(orderDTO.productList.length)
        {
            for (let i = 0; i < orderDTO.productList.length; i++) {
                const productDTO = orderDTO.productList[i];
                const product = await Product.findOne({
                    where: { name: productDTO.name },
                    include: [Vendor],
                    order: [[Vendor, 'price', 'ASC']]
                });
                // Assign the vendor to the order
                order.addProduct(product);
            }
        }
        return new OrderDTO(order);
    } catch (err) {
        throw new Error(`Error creating order: ${err}`);
    }
};

// Function to view an order
const viewOrder = async (orderId) => {
    try {
        // Find the order in the database
        const order = await Order.findOne({
            where: { orderId },
            include: [{
                model: OrderProduct,
                include: [{
                    model: Product,
                    include: [Vendor]
                }]
            }]
        });
        return new OrderDTO(order);
    } catch (err) {
        throw new Error(`Error getting order: ${err}`);
    }
};

// Function to commit an order
const commitOrder = async (orderId, finalPrice) => {
    try {
        // Update the final price for the order
        await Order.update({ finalPrice }, { where: { orderId } });
        // Move the order to fulfillment
        // ...
    } catch (err) {
        throw new Error(`Error committing order: ${err}`);
    }
};

module.exports={
    createOrder,
    viewOrder,
    commitOrder
}