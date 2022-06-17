const router = require("express").Router();
let appointment= require("../models/appointment.js");
let signup = require("../models/register")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// http://Localhost:8080/doctor/addappointment
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

module.exports = router;