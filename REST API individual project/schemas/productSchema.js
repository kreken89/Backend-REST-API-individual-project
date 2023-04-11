const mongoose = require('mongoose');
const { Schema } = mongoose; //Berättar för programmet vad ett Schema är för något

// Skapa schema för produkter
const productSchema = new Schema({
  name:             { type: String, required: true },
  description:      { type: String, required: true },
  price:            { type: Number, required: true },
  imgURL:         { type: String, required: true },
  // customer:         { type: Schema.Types.ObjectId, ref: 'User' },
});


//Skapar mappen "Product" på databasen, mongoDB, det är "mongoose.model" som skapar själva portionen på DB.
module.exports = mongoose.model('Product', productSchema);

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;