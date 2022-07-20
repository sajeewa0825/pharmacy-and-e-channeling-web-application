const router = require("express").Router();
const appointment = require("../models/appointment.js");
const signup = require("../models/register");
const doctor = require("../models/doctor")
const product = require("../models/product")
const buy = require("../models/buyitem")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const SendMail = require("../utils/sendEmail")

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN1 = process.env.ADMIN1

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

// delete appointment
// http://Localhost:8080/appointmentdelete
router.route("/appointmentdelete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await appointment.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "appointment delete " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "appointment delete error", error: err.message });
    })
})


// update appointment
// http://Localhost:8080/update/dfdsrr353fd
router.route("/appointmentupdate/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
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
        Total_bill } = req.body;

    const updateData = {
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
    }

    await appointment.findByIdAndUpdate(userId, updateData).then(() => {
        res.status(200).send({ status: "appointment updated " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "appointment update error ", error: err.message });
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

// get user
// http://Localhost:8080/getuser
router.route("/getuser").get((req, res) => {

    signup.find().then((doctor) => {
        res.json(doctor);
    }).catch((err) => {
        console.log(err)
    })
})

// delete doctor
// http://Localhost:8080/userdelete/:id
router.route("/userdelete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await signup.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "user delete " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "user delete error", error: err.message });
    })
})


// user signin
// http://Localhost:8080/signin
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
                Email: user.Email,
            },
            JWT_SECRET_KEY, {
            expiresIn: '24h'
        }
        )

        const admintoken = jwt.sign(
            {
                Email: user.Email,
            },
            JWT_SECRET_KEY, {
            expiresIn: '6h'
        }
        )

        const userdata = {
            token,
            name
        }

        if (ADMIN1 === user.Email) {
            return res.json({ status: 200, admin: admintoken })
        } else {
            return res.json({ status: 200, user: userdata })
        }
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

// delete doctor
// http://Localhost:8080/doctordelete/:id
router.route("/doctordelete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await doctor.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "doctor delete " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "doctor delete error", error: err.message });
    })
})

// update appointment
// http://Localhost:8080/update/dfdsrr353fd
router.route("/doctorupdate/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        name,
        specialist,
        timePeriod,
        Id,
        Dob,
        Gender,
        Email,
        P_no,
        Address } = req.body;

    const updateData = {
        name,
        specialist,
        timePeriod,
        Id,
        Dob,
        Gender,
        Email,
        P_no,
        Address
    }

    await doctor.findByIdAndUpdate(userId, updateData).then(() => {
        res.status(200).send({ status: "Doctor updated " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Doctor  update error ", error: err.message });
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
    const qty = req.body.qty;
    const info = req.body.info;

    const newproduct = new product({
        name,
        imgLink,
        price,
        qty,
        info
    })

    newproduct.save().then(() => {
        res.json("Product add succesfull");
    }).catch((err) => {
        console.log(err);
    })
})


// get product
// http://Localhost:8080/addproduct
router.route("/addproduct").get((req, res) => {

    product.find().then((product) => {
        res.json(product);
    }).catch((err) => {
        console.log(err)
    })
})

// delete doctor
// http://Localhost:8080/deleteproduct/:id
router.route("/deleteproduct/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await product.findByIdAndDelete(userId).then(() => {
        res.status(200).send({ status: "product delete " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "product delete error", error: err.message });
    })
})

// update appointment
// http://Localhost:8080/update/dfdsrr353fd
router.route("/productupdate/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        name,
        qty,
        imgLink,
        price,
        info
    } = req.body;

    const updateData = {
        name,
        qty,
        imgLink,
        price,
        info
    }

    await product.findByIdAndUpdate(userId, updateData).then(() => {
        res.status(200).send({ status: "product updated " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "product  update error ", error: err.message });
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


// add buyitem
// http://Localhost:8080/buyitem
router.route("/buyitem").post((req, res) => {

    const name = req.body.name;
    const user = req.body.user;
    const address = req.body.address;
    const phone = req.body.phone;
    const item = req.body.item;
    const bill = req.body.bill;
    const d_t = new Date()
    const status = req.body.status;

    const decode = jwt.verify(user, JWT_SECRET_KEY)

    let year = d_t.getFullYear();
    let month = ("0" + (d_t.getMonth() + 1)).slice(-2);
    let day = ("0" + d_t.getDate()).slice(-2);

    const date =year + "-" + month + "-" + day

    if (decode.Email) {

        const newbuyitem = new buy({
            name,
            user: decode.Email,
            address,
            phone,
            item,
            bill,
            date,
            status
        })



        newbuyitem.save().then((response) => {
            res.json({ status: 200, message: "Product buy succesfull" });
            console.log(response)
            const subject = "Your order has shipped"
            const text = `
            Medisuite,
            Woo hoo! Your order is on its way. Your order details can be found below.
            
            TRACK YOUR ORDER 
            
            ORDER SUMMARY:
            
            Order ID: ${response._id}
            Order Date: ${date}
            Order Total: ${bill}
            Phone number: ${phone}
            SHIPPING ADDRESS: ${address}

            ..Item List..
            ${item.map( (data) =>{
                return ("Name- \t" +data.name+ "\t  price Rs.- " +data.price + "\tquntity- \t" +data.qty+"\n\t   ")
            })}
            
            
            Thank you for placing your order!`
        
        
            SendMail(decode.Email, subject, text)
        }).catch((err) => {
            console.log(err);
            res.json(err)
        })

    } else {
        return res.send({ status: 500, message: 'Not valid user please Relogin' })

    }


})


// get buyitem
// http://Localhost:8080/addproduct
router.route("/buyitem").get((req, res) => {
    let token = req.query.token
    const decode = jwt.verify(token, JWT_SECRET_KEY)

    if (decode.Email) {
        buy.find({
            user:decode.Email,
            status:"pending"
        }).then((product) => {
            res.json(product);
        }).catch((err) => {
            console.log(err)
            res.json(err);
        })
    }

})

// update buyitem status
// http://Localhost:8080/buyitem/dfdsrr353fd
router.route("/buyitem/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        status
    } = req.body;

    const updateData = {
        status
    }

    await buy.findByIdAndUpdate(userId, updateData).then(() => {
        res.status(200).send({ status: "product updated " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "product  update error ", error: err.message });
    })
})

// update item qty
// http://Localhost:8080/update/dfdsrr353fd
router.route("/productqtyfind/:id").get(async (req, res) => {
    const pid = req.params.id;
    product.find({
        _id:pid
    }).then((productdata) => {
        res.json(productdata);
    }).catch((err) => {
        console.log(err)
        res.json(err);
    })


})


router.route("/productqtyupdated/:id").put(async (req, res) => {
    const pid = req.params.id;
    const {
        qty
    } = req.body;
    const updateData ={
        qty:qty
    }
    product.findByIdAndUpdate(pid, updateData).then(() => {
        res.status(200).send({ status: "product updated " })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "product  update error ", error: err.message });
    })
})




module.exports = router;