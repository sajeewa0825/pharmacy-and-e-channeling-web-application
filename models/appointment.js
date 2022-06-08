const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    doctor_name: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    id: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: false
    },

    phone: {
        type: Number,
        required: true
    },

    addres: {
        type: String,
        required:false
    }
})

const appointment = mongoose.model("appointment",appointmentSchema);

module.exports= appointment;