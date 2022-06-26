import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Login.css"
import Navbar from "../Navbar/Navbar.js"
import axios from 'axios'



const theme = createTheme();

export default function SignIn() {
    let [token, Settoken] = useState("");
    let [Password, SetPassword] = useState("");

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const data1 = {
        token,
        Password
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        validate(data1);

        if (isSubmit) {
            axios.post('http://Localhost:8080/doctor/setpassword', data1).then((res) => {
                console.log(res)
                alert(res.data.message)
                window.location.href = '/signin'
              }).catch((err) => {
                alert(err)
            }) 

        }
    };

    const validate = (values) => {
        const errors = {};
        let checkerror = 0;
        if (!values.token) {
            errors.Email = "Secure text is required!";
            checkerror = 1;
        }
        if (!values.Password) {
            errors.Password = "Password is required";
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
                        Set Password
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id='form2'>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Security Txt"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => { Settoken(e.target.value) }}
                        />
                        <p className='valiFailcolor'>{formErrors.Email}</p>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => { SetPassword(e.target.value) }}
                        />
                        <p className='valiFailcolor'>{formErrors.Password}</p>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}