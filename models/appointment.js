const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    Dr_name: {
        type: String,
        required: true
    },

    F_name: {
        type: String,
        required: true
    },

    L_name: {
        type: String,
        required: true
    },

    Time: {
        type: String,
        required: true
    },

    Id: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: false
    },

    P_no: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required:false
    },

    Total_bill: {
        type: String,
        required:true
    },

    Date: {
        type: String,
        required:true
    },

    AppointmentSendTime: {
        type: String,
        required:true
    },

    Gender: {
        type: String,
        required:false
    },

    Dr_type: {
        type: String,
        required:false
    }
})

const appointment = mongoose.model("appointment",appointmentSchema);

module.exports= appointment;