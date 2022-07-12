const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    imgLink : {
        type: String,
        required: true
    },

    price : {
        type: String,
        required: true
    },

    qty : {
        type: String,
        required: true
    },

    info : {
        type: String,
        required: true
    }


})

const product = mongoose.model("product",productSchema);

module.exports= product;