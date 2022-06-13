import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com'


const emailsend = (newAppointment) =>{
  const service_id= 'service_gds5i2d'
  const template_id= 'template_f0driub'
  const user_id= 'zC-jA7DMIOelAwpSg'


  const to_name= newAppointment.F_name;
  const message="Your Appointment is conformed."
  const reply_to=newAppointment.Email
  const data = {
    to_name,
    message,
    reply_to
  }

  emailjs.send(service_id,template_id,data,user_id).then( (res) =>{
    console.log(res)
  }).catch( (err) =>{
    console.log(err)
  })
}


function PaymentForm(props) {





  const sendData = (e) => {
    e.preventDefault();
    let Dr_name = props.AddressForm[0].Dr_name
    let F_name = props.AddressForm[0].F_name
    let L_name = props.AddressForm[0].L_name
    let Time = props.AddressForm[0].Time
    let Id = props.AddressForm[0].Id
    let Email = props.AddressForm[0].Email
    let P_no = props.AddressForm[0].P_no
    let Address = props.AddressForm[0].Address
    let Total_bill = props.AddressForm[0].Total_bill

    let newAppointment = {
      Dr_name,
      F_name,
      L_name,
      Time,
      Id,
      Email,
      P_no,
      Address,
      Total_bill
    }
    axios.post("http://localhost:8080/doctor/addappointment", newAppointment).then((res) => {
      console.log("succes");
      console.log(res)
      alert("Payed!  This is a success alert")
      emailsend(newAppointment)
    }).catch((err) => {
      alert(err)
    })
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Button sx={{ mt: 3, ml: 1 }} variant="contained" onClick={sendData.bind(this)}>
            Pay
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    AddressForm: state.AddressForm
  }
}

export default connect(mapStateToProps)(PaymentForm)