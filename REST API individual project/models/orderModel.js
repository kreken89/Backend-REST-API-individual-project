const mongoose = require('mongoose');
const Order = require('../schemas/orderSchemas')

exports.createNewOrder = (req, res) => {

    const { orderRows } = req.body;

    if(!orderRows) {
        return res.status(400).json({
            message: 'You need to enter all the fields'
        })
    }

    Order.create({ 
        orderRows,
        userId: new mongoose.Types.ObjectId()
    })
    .then(data => {
        res.status(201).json({ userId: data.userId });
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Something went wrong when generating the order',
            err: err.message
        })
    })

}


// exports.createOrder = (req, res) => {

//     this.createOrder.create({
//         userId: req.userData._id,
//         orderRows: req.body.rows
//     })
// }

// exports.getMyOrders = (req, res) => {
    
//     Order.find({ userId: 'jködasjgöhkhag'})
// }