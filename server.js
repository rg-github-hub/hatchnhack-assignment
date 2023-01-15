const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const router = express.Router();

const controller = require("./src/controller");

server.use(bodyParser.json());

// Connect to the database
const sequelize = new Sequelize('ecommerce', 'root', 'Rahul@2001', {
    host: 'localhost',
    dialect: 'mysql'
});


let routes = (server) => {
    router.post("/createOrder", controller.createOrder);
    router.get("/viewOrder/:orderId", controller.viewOrder);
    router.put("/commitOrder/:orderId", controller.commitOrder);

    server.use(router);
};

server.use(express.urlencoded({ extended: true }));
routes(server);

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

