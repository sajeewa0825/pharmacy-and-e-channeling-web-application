const router = require("express").Router();
let appointment= require("../models/appointment.js");

// http://Localhost:8080/appointment/addappointment
router.route("/addappointment").post((req, res) => {

    const F_name = req.body.F_name;
    const L_name = req.body.L_name;
    const Dr_name=req.body.Dr_name;
    const Time=req.body.Time;
    const Id =req.body.Id;
    const P_no=req.body.P_no;
    const Email=req.body.Email;
    const Address = req.body.Address;
    const Total_bill = req.body.Total_bill;

    const newappointment = new appointment({
        Dr_name,
        F_name,
        L_name,
        Time,
        Id,
        Email,
        P_no,
        Address,
        Total_bill
    })

    newappointment.save().then(() => {
        res.json("appointment succues");
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;