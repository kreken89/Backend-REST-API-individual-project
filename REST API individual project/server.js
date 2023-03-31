const app = require('./app');                 
const mongoose = require('mongoose');
require('dotenv').config();                   

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT));

//Kopplar upp oss emot mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err.message));
