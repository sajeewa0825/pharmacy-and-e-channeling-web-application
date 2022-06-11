import React, { useState } from 'react'
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

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    let [Email, SetEmail] = useState("");
    let [Password, SetPassword] = useState("");
    const handleSubmit = async(event) => {
        event.preventDefault();
		const response = await fetch('http://Localhost:8080/doctor/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Email,
				Password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			// alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={ (e) =>{ SetEmail(e.target.value) }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={ (e) =>{ SetPassword(e.target.value) }}
                        />
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
                            Sign In
                        </Button>
                        <div className="text-center mb-3">
                            <p> Or Sign in with:</p>
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
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" className='setfont'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" className='setfont'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}