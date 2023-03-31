const express = require('express');                  //Importerar express
const app = express();                               //Kickar igång express
const cors = require('cors');                        //Importera cors

//Middlewares
app.use(cors());                                     //Använd cors
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./controllers/userController'));

module.exports = app;                                 
