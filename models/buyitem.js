const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buySchema = new Schema({
    user: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: false
    },

    phone: {
        type: String,
        required: true
    },

    item: {
        type: Array,
        required: false
    },

    bill: {
        type: String,
        required: false
    },

    status: {
        type: String,
        required: false
    }

})

const buy = mongoose.model("buy",buySchema);

module.exports= buy;