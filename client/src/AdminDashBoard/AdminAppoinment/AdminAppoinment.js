import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AdminAppoinment = () => {
  const [appointment, Setappointment] = useState([])

  useEffect(() => {
    const getdata = () => {
      axios.get("http://Localhost:8080/getappointment").then((res) => {
        console.log(res.data)
        Setappointment(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    getdata();
  }, [])

  let [Dr_name, SetDname] = useState("");
  let [TimePeriod, SetTimePeriod] = useState("");
  let [date, setdate] = useState(new Date());
  let [F_name, SetFname] = useState("");
  let [Gender, SetGender] = useState("");
  let [L_name, SetLname] = useState("");
  let [Address, Setaddres] = useState("");
  let [Id, Setid] = useState("");
  let [Email, SetEmail] = useState("");
  let [P_no, SetPno] = useState("");
  let [Dr_type, SetDtype] = useState("");
  
  const[userid,setUserid] = useState("")
  const[submit,setsubmit] = useState("")
  let Total_bill = 3000;

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

  const sendupdateData = (e) => {
    e.preventDefault();

    let Appointmentupdate = {
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
      axios.put(`http://localhost:8080/appointmentupdate/${userid}`, Appointmentupdate).then(() => {
        setsubmit("")
        document.getElementById("form").reset();
        document.getElementById('closebutton').click();
        window.location.reload(false);
      }).catch((err) => {
        alert(err)
      })
    
  }

  const updatedata = (data) => {
    document.getElementById('openbutton').click();
    setUserid(data._id)
    setsubmit("update")
    SetFname(data.F_name)
    SetLname(data.L_name)
    SetPno(data.P_no)
    Setaddres(data.Address)
    Setid(data.Id)
    SetEmail(data.Email)
    SetDname(data.Dr_name)
    SetDtype(data.Dr_type)
    SetTimePeriod(data.Time)
    setdate(data.Date)
    SetGender(data.Gender)
  }


  const controlbtn = (e) => {
    if (submit === "update") {
      sendupdateData(e)
    } else {
      submitHandler(e)
    }
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
          <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary" onClick={() => updatedata(data)}></i>
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
                        <label for="inputGender" class="form-label">
                          Specialist
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => { SetDtype(e.target.value) }}
                          value={Dr_type}
                        >
                          <option value="1">Specialist 1</option>
                          <option value="2">Specialist 2</option>
                          <option value="3">Specialist 3</option>
                          <option value="4">Specialist 4</option>
                          <option value="5">Specialist 5</option>
                          <option value="6">Specialist 6</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label for="inputGender" class="form-label">
                          Doctor
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => { SetDname(e.target.value) }}
                          value={Dr_name}
                        >
                          <option value="1">Doctor 1</option>
                          <option value="2">Doctor 2</option>
                          <option value="3">Doctor 3</option>
                          <option value="4">Doctor 4</option>
                          <option value="5">Doctor 5</option>
                          <option value="6">Doctor 6</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label for="inputGender" class="form-label">
                          Time Period
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          onChange={(e) => { SetTimePeriod(e.target.value) }}
                          value={TimePeriod}
                        >
                          <option value="1">Time Period 1</option>
                          <option value="2">Time Period 2</option>
                          <option value="3">Time Period 3</option>
                          <option value="4">Time Period 4</option>
                          <option value="5">Time Period 5</option>
                          <option value="6">Time Period 6</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label for="inputDate" class="form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="inputDate"
                          onChange={(e) => { setdate(e.target.value) }}
                          value={date}
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
                          onClick={(e) => controlbtn(e)}
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
