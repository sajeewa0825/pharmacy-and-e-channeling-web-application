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
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    item: {
        type: Array,
        required: true
    },

    bill: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    }

})

const buy = mongoose.model("buy",buySchema);

module.exports= buy;