import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AdminAppoinment = () => {
  const [appointment, Setappointment] = useState([])
  const [doctordata, SetDoctordata] = useState([])
  const [specialist, Setspecialist] = useState([])
  const [timepi, Settimepi] = useState([])

  useEffect(() => {
    const getdata = () => {
      axios.get("http://Localhost:8080/getappointment").then((res) => {
        console.log(res.data)
        Setappointment(res.data)
      }).catch((err) => {
        alert(err)
      })

      axios.get("http://Localhost:8080/regdoctor").then((res) => {
        console.log(res.data)
        SetDoctordata(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    getdata();
  }, [])

  const [Dr_name, SetDname] = useState("");
  const [TimePeriod, SetTimePeriod] = useState("");
  const [date, setdate] = useState(new Date());
  const [F_name, SetFname] = useState("");
  const [Gender, SetGender] = useState("");
  const [L_name, SetLname] = useState("");
  const [Address, Setaddres] = useState("");
  const [Id, Setid] = useState("");
  const [Email, SetEmail] = useState("");
  const [P_no, SetPno] = useState("");
  const [Dr_type, SetDtype] = useState("");

  const Total_bill = 3000;

  if (localStorage.token) {
    Total_bill = Total_bill * ((100 - 10) / 100);
  }

  const AppointmentSendTime = new Date()
  let newAppointment = {
    Dr_name,
    Dr_type,
    TimePeriod,
    Date: date,
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

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/addappointment", newAppointment).then((res) => {
      document.getElementById("form").reset();
      document.getElementById('closebutton').click();
      window.location.reload(false);
    }).catch((err) => {
      alert(err)
    })
  }

  const deletedata = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8080/appointmentdelete/${id}`).then((res) => {
      Setappointment(appointment.filter(item => item._id !== id))
      alert("Appointment deleted")
    }).catch((err) => {
      alert(err)
    })
  }




  const doctorSelect = (spe) => {
    SetDtype(spe)
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





  const appointmentList = appointment.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data._id}</td>
        <td>{data.F_name}</td>
        <td>{data.L_name}</td>
        <td>{data.Dr_type}</td>
        <td>{data.Dr_name}</td>
        <td>{data.Date}</td>
        <td>{data.Time}</td>
        <td>{data.Gender}</td>
        <td>{data.Email}</td>
        <td>{data.Id}</td>
        <td>{data.P_no}</td>
        <td>{data.Address}</td>
        <td>Rs.{data.Total_bill}</td>

        <td>
          <i class="bi bi-trash text-danger" onClick={() => deletedata(data._id)}></i>
        </td>
      </tr>
    )
  })

  return (
    <div>
      {" "}
      <div className="container">
        <div className="row p-3 adminDoc_top_row">
          <div className="col">
            <h4>APPOINTMENT LIST</h4>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              class="AdminDoctor_AddDoc_btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id='openbutton'
            >
              <i class="bi bi-plus-circle"></i>Add APPOINTMENT
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable ">
                <div class="modal-content border-0 ">
                  <div class="modal-header AdminDoctor_modal_Head shadow">
                    <h5 class="modal-title" id="staticBackdropLabel">
                      ADD APPOINTMENT
                    </h5>
                    <button
                      type="button"
                      class="btn-close AdminDoctor_modal_Head_Btn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      id='closebutton'
                    ></button>
                  </div>
                  <div class="modal-body ">
                    <form class="row g-3" id='form'>
                      <div class="col-md-12">
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
                            {/* <p className='valiFailcolor'>{formErrors.Dname}</p> */}
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
                            {/* <p className='valiFailcolor'>{formErrors.TimePeriod}</p> */}
                          </Grid>

                        </Grid>
                      </div>
                      <div class="col-md-6">
                            <label for="inputDate" class="form-label">
                              Date
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="inputDate"
                              onChange={ (e) => { setdate(e.target.value)}}
                            />
                          </div>
                      <div class="col-md-6">
                        <label for="inputGender" class="form-label">
                          Select Gender
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => { SetGender(e.target.value) }}
                          value={Gender}
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label for="inputFName" class="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputFName"
                          value={F_name}
                          onChange={(e) => { SetFname(e.target.value) }}
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputLName" class="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputLName"
                          value={L_name}
                          onChange={(e) => { SetLname(e.target.value) }}
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="inputAge" class="form-label">
                          Age
                        </label>
                        <input type="text" class="form-control" id="inputAge" />
                      </div>

                      <div class="col-md-6">
                        <label for="inputEmail" class="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail"
                          value={Email}
                          onChange={(e) => { SetEmail(e.target.value) }}
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="inputIdNum" class="form-label">
                          Id Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputIdNum"
                          value={Id}
                          onChange={(e) => { Setid(e.target.value) }}
                        />
                      </div>

                      <div class="col-md-6">
                        <label for="inputIdNum" class="form-label">
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputIdNum"
                          value={P_no}
                          onChange={(e) => { SetPno(e.target.value) }}
                        />
                      </div>

                      <div class="col-12">
                        <label for="inputAddress" class="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputAddress"
                          placeholder="1234 Main St"
                          value={Address}
                          onChange={(e) => { Setaddres(e.target.value) }}
                        />
                      </div>

                      <div class="col-12">
                        <button
                          type="submit"
                          class="AdminDoctor_modal_Submit_Btn"
                          onClick={(e) => submitHandler(e)}
                        >
                          Submit
                        </button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 p-3">
            <div className="card">
              <div class="card-body table-responsive pe-4">
                <table class="table table-hover  adminHome_Appoinment-Table ">
                  <thead className="adminHome_Appoinment-TableHead">
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">First_name</th>
                      <th scope="col">Second_name</th>
                      <th scope="col">Specialist</th>
                      <th scope="col">Doctor</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time_Period</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Email</th>
                      <th scope="col">NIC</th>
                      <th scope="col">Mobile</th>
                      <th scope="col">Address</th>
                      <th scope="col">Total_bill</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {appointmentList}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAppoinment;

const doctor = [
  { label: "Select" },
  { label: "cardiologist" },
  { label: "dermatologist" },
  { label: "Counsiling psychologist" },
  { label: "cancer surgeon" },
]