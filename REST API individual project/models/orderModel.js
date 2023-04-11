const mongoose = require('mongoose');
const Order = require('../schemas/orderSchemas')

// Create a new order
exports.createNewOrder = async (req, res) => {
  const { orderRows } = req.body;

  if (!orderRows) {
    return res.status(400).json({
      message: 'You need to enter all the fields',              // Return a 400 response with an error message if orderRows is not provided
    });
  }

  try {
    const data = await Order.create({                           // Use the Order schema to create a new order with the provided orderRows and userId
      orderRows,
      userId: req.userId,
    });

    res.status(201).json({ userId: data.userId });              // Return a 201 response with the userId of the newly created order
  } catch (err) {
    return res.status(500).json({
      message: 'Something went wrong when creating the order', // Return a 500 response with an error message if an error occurs
      err: err.message,
    });
  }
}

// Get all orders for a logged-in user
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.userId });      // Use the Order schema to find all orders with the logged-in userId

  res.status(200).json(orders);                                 // Return a 200 response with the orders found
}
