const router = require("express").Router();
let appointment= require("../models/appointment.js");
let signup = require("../models/register");
let doctor = require("../models/doctor")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// http://Localhost:8080/doctor/addappointment
router.route("/addappointment").post((req, res) => {

    console.log(req.body)

    const F_name = req.body.F_name;
    const L_name = req.body.L_name;
    const Dr_name=req.body.Dr_name;
    const Time=req.body.TimePeriod;
    const Date = req.body.Date;
    const Gender =req.body.Gender;
    const Id =req.body.Id;
    const P_no=req.body.P_no;
    const Email=req.body.Email;
    const Address = req.body.Address;
    const Total_bill = req.body.Total_bill;
    const AppointmentSendTime=req.body.AppointmentSendTime

    const newappointment = new appointment({
        Dr_name,
        Time,
        Date,
        F_name,
        L_name,
        Gender,
        Id,
        Email,
        P_no,
        Address,
        Total_bill,
        AppointmentSendTime
    })

    newappointment.save().then(() => {
        res.json("appointment succues");
    }).catch((err) => {
        console.log(err);
    })
})

// http://Localhost:8080/doctor/signup
router.route("/signup").post(async(req, res) => {

    const F_name = req.body.F_name;
    const L_name = req.body.L_name;
    const Email=req.body.Email;
    const Password = req.body.Password;
    const user = await signup.findOne({ Email: req.body.Email })
    if (user) {
        console.log("Email address already exists")
        res.json({ status: 'error', error: 'Duplicate email' })
	}else{
        try {
            const newPassword = await bcrypt.hash(req.body.Password, 10)
            await signup.create({
                F_name: req.body.F_name,
                L_name: req.body.L_name,
                Email: req.body.Email,
                Password: newPassword,
            })
            res.json({ status: 'ok' })
        } catch (err) {
            res.json({ status: 'error', error: 'Duplicate email' })
        }
    }

})

// http://Localhost:8080/doctor/signin
router.route("/signin").post(async(req, res) => {

    console.log(req.body)
    const user = await signup.findOne({
		Email: req.body.Email,
	})

	if (!user) {
		return res.json( { status: 'error', error: 'Invalid login' })
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.Password,
		user.Password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				Email: user.Email,
			},
			'secretuwu123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}



})


// http://Localhost:8080/doctor/regdoctor
router.route("/regdoctor").post((req, res) => {

    const name = req.body.name;
    const specialist = req.body.specialist;
    const Dob = req.body.Dob;
    const Gender = req.body.Gender;
    const timePeriod=req.body.timePeriod;
    const Id =req.body.Id;
    const P_no=req.body.P_no;
    const Email=req.body.Email;
    const Address = req.body.Address;

    const newdoctor = new doctor({
        name,
        specialist,
        timePeriod,
        Id,
        Dob,
        Gender,
        Email,
        P_no,
        Address,
    })

    newdoctor.save().then(() => {
        res.json("Doctor Register succues");
    }).catch((err) => {
        console.log(err);
    })
})


// http://Localhost:8080/doctor/regdoctor
router.route("/regdoctor").get((req, res) => {

    doctor.find().then((doctor) => {
        res.json(doctor);
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;