const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    specialist : {
        type: String,
        required: true
    },

    timePeriod : {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: false
    },

    Dob: {
        type: String,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    Id: {
        type: String,
        required: true
    },

    P_no: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required: true
    },

})

const doctor = mongoose.model("doctor",doctorSchema);

module.exports= doctor;