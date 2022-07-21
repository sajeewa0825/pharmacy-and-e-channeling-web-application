import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AddressFormSend } from "../../../actions/AddressFormActions"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import axios from 'axios'

function AddressForm(props) {

    let [Dname, SetDname] = useState("");
    let [TimePeriod, SetTimePeriod] = useState("");
    let [datevalue, setdate] = React.useState(new Date());
    let [Fname, SetFname] = useState("");
    let [Gender, SetGender] = useState("");
    let [Lname, SetLname] = useState("");
    let [address, Setaddres] = useState("");
    let [id, Setid] = useState("");
    let [Email, SetEmail] = useState("");
    let [Pno, SetPno] = useState("");


    const [formErrors, setFormErrors] = useState({});
    const [doctordata, SetDoctordata] = useState([])
    const [specialist, Setspecialist] = useState([])
    const [timepi, Settimepi] = useState([])
    const [Dtype,Setdtype]=useState("")



    useEffect(() => {
        const getdoctor = () => {
            axios.get("https://medisuite.herokuapp.com/regdoctor").then((res) => {
                console.log(res.data)
                SetDoctordata(res.data)
            }).catch((err) => {
                alert(err)
            })
        }

        getdoctor();
    }, [])

    const AppointmentSendTime = new Date();

    const data = {
        Dname,
        Dtype,
        TimePeriod,
        datevalue,
        Fname,
        Lname,
        Gender,
        address,
        id,
        Email,
        Pno,
        AppointmentSendTime
    }

    const CheckValidate = async (event) => {
        event.preventDefault();
        let checkerror =validate(data);

        if (checkerror===0) {
            console.log(Dtype)
            props.AddressFormSend(data)
        }
    }

    const validate = (values) => {
        const errors = {};
        let checkerror = 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Dname) {
            errors.Dname = "Doctor Name is required!";
            checkerror = 1;
        }
        if (!values.Fname) {
            errors.Fname = "Frist Name is required!";
            checkerror = 1;
        }
        if (!values.Email) {
            errors.Email = "Email is required!";
            checkerror = 1;
        } else if (!regex.test(values.Email)) {
            errors.Email = "This is not a valid email format!";
            checkerror = 1;
        }
        if (!values.id) {
            errors.id = "Id is required";
            checkerror = 1;
        }

        if (!values.address) {
            errors.address = "Addres is required";
            checkerror = 1;
        }

        if (!values.TimePeriod) {
            errors.TimePeriod = "Time is required";
            checkerror = 1;
        }

        if (!values.Gender) {
            errors.Gender = "Time is required";
            checkerror = 1;
        }

        if (!values.datevalue) {
            errors.datevalue = "Date is required";
            checkerror = 1;
        }

        if (values.datevalue <= new Date()) {
            errors.datevalue = "Date is incorrect";
            checkerror = 1;
        }
        setFormErrors(errors)
        return checkerror;
    };


    const doctorSelect = (spe) => {
        Setdtype(spe)
        const filtered = doctordata.filter(obj => {
            return obj.specialist === spe;
        });

        Setspecialist(filtered);
    }

    const settime = (drname) => {
        SetDname(drname.name)

        const filtered = doctordata.filter(obj => {
            return obj._id === drname._id;
        });

        Settimepi(filtered)
    }





    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Appointment
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={doctor}
                        onChange={(event, value) => doctorSelect(value.label)}
                        renderInput={(params) => <TextField {...params} label="Specialist" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={specialist}
                        onChange={(event, value) => settime(value)}
                        renderInput={(params) => <TextField {...params} label="Doctor" />}
                        getOptionLabel={(option) => option.name}
                    />
                    <p className='valiFailcolor'>{formErrors.Dname}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={timepi}
                        onChange={(event, value) => SetTimePeriod(value.timePeriod)}
                        renderInput={(params) => <TextField {...params} label="Time Period" />}
                        getOptionLabel={(option) => option.timePeriod}
                    />
                    <p className='valiFailcolor'>{formErrors.TimePeriod}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={datevalue}
                            onChange={(newValue) => {
                                setdate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <p className='valiFailcolor'>{formErrors.datevalue}</p>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={gender}
                        onChange={(event, value) => SetGender(value.label)}
                        renderInput={(params) => <TextField {...params} label="Gender" />}
                    />
                    <p className='valiFailcolor'>{formErrors.Gender}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => { SetFname(e.target.value) }}
                    />
                    <p className='valiFailcolor'>{formErrors.Fname}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={(e) => { SetLname(e.target.value) }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={(e) => { Setaddres(e.target.value) }}
                    />
                    <p className='valiFailcolor'>{formErrors.address}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="id"
                        required
                        id="id"
                        name="city"
                        label="NIC/Passport"
                        fullWidth
                        autoComplete="Email"
                        variant="standard"
                        onChange={(e) => { Setid(e.target.value) }}
                    />
                    <p className='valiFailcolor'>{formErrors.id}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="email"
                        required
                        id="email"
                        name="city"
                        label="Email"
                        fullWidth
                        autoComplete="Email"
                        variant="standard"
                        onChange={(e) => { SetEmail(e.target.value) }}
                    />
                    <p className='valiFailcolor'>{formErrors.Email}</p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Phone"
                        name="state"
                        label="Phone number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { SetPno(e.target.value) }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" onChange={(e) => CheckValidate(e)} />}
                        label="details Check"
                    />

                </Grid>
            </Grid>
        </React.Fragment>
    );
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ AddressFormSend: AddressFormSend }, dispatch)
}

export default connect(null, matchDispatchToProps)(AddressForm)




const doctor = [
    { label: "Select" },
    { label: "cardiologist" },
    { label: "dermatologist" },
    { label: "Counsiling psychologist" },
    { label: "cancer surgeon" },
  ]

const gender = [
    { label: "Male" },
    { label: "Female" }
]