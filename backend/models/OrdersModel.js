const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModule = new model("order", OrdersSchema);
module.exports = { OrdersModule };
