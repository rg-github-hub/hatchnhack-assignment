

// Create the DTOs
class OrderDTO {
    constructor(order) {
        this.orderId = order.orderId;
        this.customerInfo = {
            name: order.customerName,
            email: order.customerEmail,
            phone: order.customerPhone
        };
        this.productList = order.orderProducts.map(product => {
            return {
                name: product.productName,
                quantity: product.quantity,
                deliveryTime: product.deliveryTime
            };
        });
        this.vendor = {
            id: order.product.vendor_id,
            name: order.product.vendor.name
        };
    }
}

class ProductDTO {
    constructor(product) {
        this.name = product.name;
        this.price = product.price;
    }
}

module.exports={
    OrderDTO,
    ProductDTO
}