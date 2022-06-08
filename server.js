const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const connection =mongoose.connection;


connection.once('open', () => {
    console.log("mongo db connections success");
})


const appointmentRoute = require("./routes/appointment.js");
// http://Localhost:8070/student
app.use("/doctor",appointmentRoute);

app.listen(PORT, () => {
    console.log("server is up and running on port $",PORT);
})