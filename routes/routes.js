const router = require("express").Router();
const appointment = require("../models/appointment.js");
const signup = require("../models/register");
const doctor = require("../models/doctor")
const product = require("../models/product")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SendMail = require("../utils/sendEmail")

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const ADMIN_EMAIL =process.env.ADMIN_EMAIL;

// add appointment details
// http://Localhost:8080/addappointment
router.route("/addappointment").post((req, res) => {
    const subject = "Your Doctor Appointment Confirmation email"

    const F_name = req.body.F_name;
    const L_name = req.body.L_name;
    const Dr_name = req.body.Dr_name;
    const Dr_type = req.body.Dr_type;
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
        Dr_type,
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

    newappointment.save().then((response) => {
        res.json(response);
        console.log(response)
        const text = `
        Hey ${req.body.F_name},
    
        confirmed your doctor appointment on ${req.body.Date}. 
        If you have questions before your appointment, use the contact details below to get in touch with us.
    
        *Doctor name - ${req.body.Dr_name}
        *patients name - ${req.body.F_name}
        *Appointment Date- ${req.body.Date}
        *Appointment Time Period - ${req.body.TimePeriod}
        *Appointment ID- ${response._id}
        *Payed Bill- ${req.body.Total_bill}
        
        To cancel or reschedule your appointment before the scheduled time
        
        Thanks for scheduling with Medisuite!
        http://localhost:8080/`;
        SendMail(req.body.Email, subject, text)
    }).catch((err) => {
        console.log(err);
    })
})

// get appointment data
// http://Localhost:8080/getappointment
router.route("/getappointment").get((req, res) => {

    appointment.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err)
    })
})


// user signup
// http://Localhost:8080/signup
router.route("/signup").post(async (req, res) => {
    const subject = "Your Medisuite account Confirmation email"
    const text = `
        Dear ${req.body.F_name}
        Thank you for completing your registration with customer portal.
    
        This email serves as a confirmation that your account is activated and that you are officially a part of the Medisute family.
        Enjoy!
    
        Regards,
        The Medisute team`;




    const user = await signup.findOne({ Email: req.body.Email })

    if (user) {
        console.log("Email address already exists")
        res.json({ status: 409, error: 'Email address already exists' })
    } else {

        const newPassword = await bcrypt.hash(req.body.Password, 10)
        const newsignup = new signup({
            F_name: req.body.F_name,
            L_name: req.body.L_name,
            Email: req.body.Email,
            Password: newPassword
        })

        newsignup.save().then(() => {
            res.json({ status: 200, message: 'sign up successful' })
            SendMail(req.body.Email, subject, text)
        }).catch((err) => {
            res.json(err)
        })

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

    const name = user.F_name;
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

        const userdata={
            token,
            name
        }

        return res.json({ status: 200, user: userdata })
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
        if (!user) {
            return res.json({ status: 409, message: "User with given email does not exist!" })
        }
        let token = user._id
        if (token) {
            let data = token;
            token = jwt.sign({
                data
            }, JWT_SECRET_KEY, { expiresIn: '180s' });
        }

        const subject = "Your Medisuite account Password Reset"
        const text = `
        Hello ${user.F_name},

        Somebody requested a new password for the customer portal account associated with email.
        
        No changes have been made to your account yet.
        
        You can reset your password using security txt.This password reset txt is only valid for the next 3 minutes.

        ${token}
        
        If you did not request a new password, please let us know  by replying to this email.
        
        Yours,
        The Medisuite team.
        http://Localhost:8080`;

        await SendMail(user.Email, subject, text).then(() => {
            return res.json({ status: 200, message: "Password reset link sent to your email account" })
        }).catch(() => {
            return res.json({ status: 409, message: "Email send error" })
        })
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
            }).then(() => {
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
    const imgLink = req.body.imgLink;
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

// send video id from email
// http://Localhost:8080/videochat
router.route("/videochat").post((req, res) => {
    console.log(req.body)

    const subject = "User online counseling join"
    const text = `
        Dear admin
        please set doctor for call id
    
        ........................................

        call id : ${req.body.me}
        
        ........................................
    
        Regards,
        The Medisute Server`;


    SendMail(ADMIN_EMAIL, subject, text)
    return res.send({ status: 200, message: 'email send' })
})






module.exports = router;