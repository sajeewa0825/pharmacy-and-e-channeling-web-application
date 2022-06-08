import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Appointment
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={doctor}
                        renderInput={(params) => <TextField {...params} label="Doctor" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Autocomplete
                        required
                        disablePortal
                        id="combo-box-demo"
                        options={time}
                        renderInput={(params) => <TextField {...params} label="Select Time" />}
                    />
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
                    />
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
                    />
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
                    />
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
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Phone"
                        name="state"
                        label="Phone number"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this email address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const doctor = [
    { label: "Dr abcd" },
    { label: "Dr ab" },
    { label: "Dr abcde" },
    { label: "Dr a" }
]

const time = [
    { label: "06.00 To 08.00 -AM" },
    { label: "04.00 To 08.00 -pM" },
]