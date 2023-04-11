const router = require('express').Router();
const { createNewOrder } = require('../models/orderModel');

router.post('/', createNewOrder );

module.exports = router