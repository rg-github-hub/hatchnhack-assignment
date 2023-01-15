const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce', 'root', 'Rahul@2001', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the Order model
const Order = sequelize.define('orders', {
    orderId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    customerName: {
        type: Sequelize.STRING
    },
    customerEmail: {
        type: Sequelize.STRING
    },
    customerPhone: {
        type: Sequelize.STRING
    },
    finalPrice: {
        type: Sequelize.DECIMAL
    }
});

// Define the Product model
const Product = sequelize.define('products', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    price: {
        type: Sequelize.DECIMAL
    }
});

// Define the OrderProduct model
const OrderProduct = sequelize.define('order_products', {
    orderId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    productName: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    deliveryTime: {
        type: Sequelize.DATE
    }
});

// Define the Vendor model
const Vendor = sequelize.define('vendors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
});

// Define the relationship between the models
Order.hasMany(OrderProduct, { foreignKey: 'orderId', sourceKey: 'orderId' });
OrderProduct.belongsTo(
    Order, { foreignKey: 'orderId', targetKey: 'orderId' });
OrderProduct.belongsTo(Product, { foreignKey: 'productName', targetKey: 'name' });
Vendor.hasMany(Product, { foreignKey: 'vendor_id', sourceKey: 'id' });
Product.belongsTo(Vendor, { foreignKey: 'vendor_id', targetKey: 'id' });

module.exports={
    Order,
    Product,
    OrderProduct,
    Vendor
}