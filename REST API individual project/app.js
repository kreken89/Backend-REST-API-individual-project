const express = require('express');                  //Importerar express
const app = express();                               //Kickar igång express
const cors = require('cors');                        //Importera cors

app.use(cors());                                     //Använd cors
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


module.exports = app;                                 
