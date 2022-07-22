import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';


function PaymentForm(props) {

  const [formErrors, setFormErrors] = useState({});

  let [cardtype, setCardname] = useState("");
  let [cardNumber, SetCardNumber] = useState("");
  let [cvv, Setcvv] = useState("");
  let [Date, SetDate] = useState("");

  const data = {
    cardNumber,
    cardtype,
    Date,
    cvv
  }

  const CheckValidate = async (event) => {
    event.preventDefault();
    let checkerror = validate(data);
    if (checkerror===0) {
      console.log("issubmit")
      sendData(event,props)
    }
  }

  const validate = (values) => {
    const errors = {};
    console.log(values.cardNumber.length)
    console.log(values.cvv.length)
    let checkerror = 0;
    if (!values.cardtype) {
      errors.cardtype = "Card type is required!";
      checkerror = 1;
    }
    if (!values.Date) {
      errors.Date = "Frist Name is required!";
      checkerror = 1;
    }
    if (!values.cvv) {
      errors.cvv = "CVV is required!";
      checkerror = 1;
    }else if(values.cvv.length !== 3){
      errors.cvv = "CVV is incorect";
      checkerror = 1;
    }
    if (!values.cardNumber) {
      errors.cardNumber = "Card Number is required";
      checkerror = 1;
    } else if (values.cardNumber.length !== 16) {
      errors.cardNumber = "Card Number is invalid";
      checkerror = 1;
    }

    setFormErrors(errors)
    return checkerror;
  };






  const sendData = (e,props) => {
    e.preventDefault();
    let Dr_name = props.AddressForm[0].Dr_name
    let Dr_type = props.AddressForm[0].D_type
    let F_name = props.AddressForm[0].F_name
    let L_name = props.AddressForm[0].L_name
    let TimePeriod = props.AddressForm[0].TimePeriod
    let Date = props.AddressForm[0].Date
    let Id = props.AddressForm[0].Id
    let Email = props.AddressForm[0].Email
    let P_no = props.AddressForm[0].P_no
    let Address = props.AddressForm[0].Address
    let Total_bill = props.AddressForm[0].Total_bill
    if(localStorage.token){
      Total_bill=Total_bill * ( (100-10) / 100 );
    }
    let Gender = props.AddressForm[0].Gender
    let AppointmentSendTime = props.AddressForm[0].AppointmentSendTime

    let newAppointment = {
      Dr_name,
      Dr_type,
      TimePeriod,
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
    }
    axios.post("http://localhost:8080/addappointment", newAppointment).then((res) => {
      alert("Payed!  This is a success alert")
      console.log(res)
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
          <Autocomplete
            required
            disablePortal
            id="combo-box-demo"
            options={cardtype1}
            onChange={(event, value) => setCardname(value.label)}
            renderInput={(params) => <TextField {...params} label="Card Type" />}
          />
          <p className='valiFailcolor'>{formErrors.cardtype}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => { SetCardNumber(e.target.value) }}
          />
          <p className='valiFailcolor'>{formErrors.cardNumber}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(e) => { SetDate(e.target.value) }}
          />
          <p className='valiFailcolor'>{formErrors.Date}</p>
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
            onChange={(e) => { Setcvv(e.target.value) }}
          />
          <p className='valiFailcolor'>{formErrors.cvv}</p>
        </Grid>
        <Grid item xs={12}>
          <Button sx={{ mt: 3, ml: 1 }} variant="contained" onClick={CheckValidate.bind()}>
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


const cardtype1 = [
  { label: "Visa" },
  { label: "Master" }
]