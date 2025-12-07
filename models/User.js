const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required to continue"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required to continue"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required to continue"]
    }
});

module.exports = mongoose.model("User", userSchema);
