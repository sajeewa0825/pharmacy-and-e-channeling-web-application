import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';


function Review(props) {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Appointment summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
            {props.AddressForm.map((data) => (
              <React.Fragment key={data.Id}>
                <Grid item xs={6}>
                  <Typography gutterBottom>Doctor Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{data.Dr_name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Patient Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{data.F_name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Select Time</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{data.Time}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{date +"/"+month+"/"+year}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Total</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Rs. {data.Total_bill}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
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

export default connect(mapStateToProps)(Review)