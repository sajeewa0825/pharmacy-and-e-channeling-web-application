import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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




const theme = createTheme();

export default function Resetpassword() {
    let [Email, SetEmail] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const data1 = {
        Email
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        validate(data1);

        if (isSubmit) {
            axios.post('http://Localhost:8080/doctor/passwordreset', data1).then((res) => {
                console.log(res)
                alert(res.message)
                window.location.href = '/resetpassword'
              }).catch((err) => {
                console.log(err)
                alert("User with given email does not exist!")
            }) 
        }
    };

    const validate = (values) => {
        const errors = {};
        let checkerror = 0;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.Email) {
            errors.Email = "Email is required!";
            checkerror = 1;
        } else if (!regex.test(values.Email)) {
            errors.Email = "This is not a valid email format!";
            checkerror = 1;
        }



        if (checkerror === 0) {
            setIsSubmit(true);
        } else {
            setIsSubmit(false);
        }
        setFormErrors(errors)
    };


    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs" className='setbottom'>
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
                        Reset Password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id='form2'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => { SetEmail(e.target.value) }}
                        />
                        <p className='valiFailcolor'>{formErrors.Email}</p>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Send Security Link
                        </Button>
                        <Grid item>
                                <Link href="/signup" variant="body2" className='setfont'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}