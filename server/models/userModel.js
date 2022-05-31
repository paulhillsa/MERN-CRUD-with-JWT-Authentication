// User model
// contains all the information about a user

// Config
const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: Boolean,
        default: false
    }

});

// Model
const User = mongoose.model('user', userSchema);

// Export
module.exports = User;
