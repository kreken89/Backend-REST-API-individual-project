const mongoose = require('mongoose');
const { Schema } = mongoose; 

const userSchema = new Schema({
    firstName:      { type: String, required: true },
    lastName:       { type: String, required: true },
    // email:          { type: String, lowercase: true, default: function() {
    // return this.firstName + this.lastName + '@shop.se' }},
    email:          { type: String, lowercase: true },
    passwordHash:   { type: String, required: true }
})



module.exports = mongoose.model('User', userSchema)



