import React, { useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css"
import Navbar from "../Navbar/Navbar.js"
import axios from 'axios'
import "./Login.css"


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Uwu.Ict
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


export default function SignUp() {
    let [F_name, SetFname] = useState("");
    let [L_name, SetLname] = useState("");
    let [Email, SetEmail] = useState("");
    let [Password, SetPassword] = useState("");

    const [formErrors, setFormErrors] = useState({});

    const data1 = {
        F_name,
        L_name,
        Email,
        Password
    }



    const handleSubmit = async (event) => {
        event.preventDefault();
        let checkerror =validate(data1);

        if (checkerror === 0) {
            axios.post("http://Localhost:8080/doctor/signup", data1).then((res) => {
                if(res.data.status === 200){
                    window.location.href =  '/signin'
                }else{
                    alert(res.data.error)
                }
              }).catch((err) => {
                console.log(err)
              })
        }

    };

    const validate = (values) => {
        const errors = {};
        let checkerror =0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.F_name) {
            errors.F_name = "Frist Name is required!";
            checkerror=1;
        }
        if (!values.L_name) {
            errors.L_name = "Last Name is required!";
            checkerror=1;
        }
        if (!values.Email) {
            errors.Email = "Email is required!";
            checkerror=1;
        } else if (!regex.test(values.Email)) {
            errors.Email = "This is not a valid email format!";
            checkerror=1;
        }
        if (!values.Password) {
            errors.Password = "Password is required";
            checkerror=1;
        } else if (values.Password.length < 4) {
            errors.Password = "Password must be more than 4 characters";
            checkerror=1;
        } else if (values.Password.length > 10) {
            errors.Password = "Password cannot exceed more than 10 characters";
            checkerror=1;
        }
        setFormErrors(errors)
        return checkerror;
    };



    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} id="form1">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="F_Name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => { SetFname(e.target.value) }}
                                />
                                <p className='valiFailcolor'>{formErrors.F_name}</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={(e) => { SetLname(e.target.value) }}
                                />
                                <p className='valiFailcolor'>{formErrors.L_name}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="Email"
                                    autoComplete="email"
                                    onChange={(e) => { SetEmail(e.target.value) }}
                                />
                                <p className='valiFailcolor'>{formErrors.Email}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => { SetPassword(e.target.value) }}
                                />
                                <p className='valiFailcolor'>{formErrors.Password}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                        <div className="text-center mb-3">
                            <p> Or Sign Up in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png' width="36px" alt='Facebook' />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' width="36px" alt='Google' />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <img src='https://cdn3.iconfinder.com/data/icons/social-media-2253/25/Group-256.png' width="36px" alt='Git hub' />
                            </button>
                        </div>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="#" variant="body2" className='setfont'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}