const mongoose = require('mongoose');
const { Schema } = mongoose;

// Skapa schema för produkter
const productSchema = new mongoose.Schema({
  name:             { String, required: true }
  description:      { String, required: true }
  price:            { Number, required: true }
  imageURL:         { String, required: true }
});



module.exports = mongoose.model('Product', productSchema)