const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const OrderController = require("../controllers/orders");

// Handle incoming GET request to /orders
router.get("/", checkAuth, OrderController.orders_get_all);

router.post("/", checkAuth, OrderController.orders_create_order);

router.get("/:orderId", checkAuth, OrderController.orders_getOne_byId);

router.delete("/:orderId", checkAuth, OrderController.orders_deleteOne);

module.exports = router;
