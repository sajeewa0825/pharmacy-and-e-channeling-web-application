const router = require("express").Router();
let appointment= require("../models/appointment.js");

// http://Localhost:8080/appointment/addappointment
router.route("/addappointment").post((req, res) => {

    const name = req.body.name;
    const doctor_name=req.body.doctor_name;
    const time=req.body.time;
    const id =Number(req.body.id);
    const phone=Number(req.body.phone);
    const email=req.body.email;
    const addres = req.body.addres;

    const newappointment = new appointment({
        name,
        doctor_name,
        time,
        id,
        phone,
        email,
        addres
    })

    newappointment.save().then(() => {
        res.json("appointment succues");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;