const router = require("express").Router();
const appointment = require("../models/appointment.js");
const signup = require("../models/register");
const doctor = require("../models/doctor")
const product = require("../models/product")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SendMail = require("../utils/sendEmail")

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// add appointment details
// http://Localhost:8080/doctor/addappointment
router.route("/addappointment").post((req, res) => {

    SendMail()
    console.log(req.body)

    const F_name = req.body.F_name;
    const L_name = req.body.L_name;
    const Dr_name = req.body.Dr_name;
    const Time = req.body.TimePeriod;
    const Date = req.body.Date;
    const Gender = req.body.Gender;
    const Id = req.body.Id;
    const P_no = req.body.P_no;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Total_bill = req.body.Total_bill;
    const AppointmentSendTime = req.body.AppointmentSendTime

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


// user signup
// http://Localhost:8080/doctor/signup
router.route("/signup").post(async (req, res) => {

    const Email = req.body.Email;
    const user = await signup.findOne({ Email: req.body.Email })

    if (user) {
        console.log("Email address already exists")
        res.json({ status: 'error', error: 'Duplicate email' })
    } else {
        try {
            const newPassword = await bcrypt.hash(req.body.Password, 10)
            await signup.create({
                F_name: req.body.F_name,
                L_name: req.body.L_name,
                Email: req.body.Email,
                Password: newPassword
            })
            res.json({ status: 'ok' })
        } catch (err) {
            res.json({ status: 'error', error: 'Duplicate email' })
        }
    }

})



// user signin
// http://Localhost:8080/doctor/signin
router.route("/signin").post(async (req, res) => {
    const user = await signup.findOne({
        Email: req.body.Email,
    })

    if (!user) {
        return res.json({ status: 'error', error: 'Invalid login' })
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
            JWT_SECRET_KEY, {
            expiresIn: '24h'
        }
        )

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }



})



// docotr register
// http://Localhost:8080/doctor/regdoctor
router.route("/regdoctor").post((req, res) => {

    const name = req.body.name;
    const specialist = req.body.specialist;
    const Dob = req.body.Dob;
    const Gender = req.body.Gender;
    const timePeriod = req.body.timePeriod;
    const Id = req.body.Id;
    const P_no = req.body.P_no;
    const Email = req.body.Email;
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


// get registered doctore
// http://Localhost:8080/doctor/regdoctor
router.route("/regdoctor").get((req, res) => {

    doctor.find().then((doctor) => {
        res.json(doctor);
    }).catch((err) => {
        console.log(err)
    })
})


// send password link
// http://Localhost:8080/doctor/passwordreset
router.route("/passwordreset").post(async (req, res) => {
    try {
        const user = await signup.findOne({
            Email: req.body.Email,
        })
        if (!user)
            return res
                .status(409)
                .send({ message: "User with given email does not exist!" });
        let token = user._id
        if (token) {
            let data = token;
            token = jwt.sign({
                data
            }, JWT_SECRET_KEY, { expiresIn: '180s' });
        }

        const text = "Medisuite Account Password Rest security code"

        const url = token;
        await SendMail(user.Email, text, url);

        res
            .status(200)
            .send({ message: "Password reset link sent to your email account" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" });
    }
});


// update password
// http://Localhost:8080/doctor/setpassword
router.route("/setpassword").post(async (req, res) => {
    console.log(req.body)

    try {
        const verified = jwt.verify(req.body.token, JWT_SECRET_KEY);
        if (verified) {
            const newPassword = await bcrypt.hash(req.body.Password, 10)
            await signup.updateOne({ _id: verified.data }, {
                Password: newPassword
            }).then((response) => {
                return res.send({ status: 200, message: 'Password Updated' })
            })
        } else {
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
});


// add product
// http://Localhost:8080/doctor/addproduct
router.route("/addproduct").post((req, res) => {

    const name = req.body.name;
    const imgLink  = req.body.imgLink ;
    const price = req.body.price;


    const newproduct = new product({
        name,
        imgLink,
        price
    })

    newproduct.save().then(() => {
        res.json("Product add succesfull");
    }).catch((err) => {
        console.log(err);
    })
})


// get product
// http://Localhost:8080/doctor/addproduct
router.route("/addproduct").get((req, res) => {

    product.find().then((product) => {
        res.json(product);
    }).catch((err) => {
        console.log(err)
    })
})






module.exports = router;