const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    F_name: {
        type: String,
        required: true
    },

    L_name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: false
    },

    Password: {
        type: String,
        required: true
    },

    token: {
        type: String,
        required: false
    }

})

const signup = mongoose.model("signup",signupSchema);

module.exports= signup;