const express = require('express');                  //Importerar express
const app = express();                               //Kickar igång express
const cors = require('cors');                        //Importera cors

//Middlewares
app.use(cors());                                     //Använd cors
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./controllers/userController'));
app.use('/api/products', require('./controllers/productController'))
app.use('/api/orders', require('./controllers/orderController'))

module.exports = app;                                 
