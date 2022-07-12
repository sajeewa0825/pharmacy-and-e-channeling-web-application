import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./AdminPatient.css";

const AdminPatient = () => {

  const [user, Setuser] = useState([])

  useEffect(() => {
    const getdata = () => {
      axios.get("http://Localhost:8080/getuser").then((res) => {
        Setuser(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    getdata();
  }, [])

  const userlist = user.map((data) => {
    return (
      <tr key={data._id}>
      <td>{data._id}</td>
      <td>{data.F_name}</td>
      <td>{data.L_name}</td>
      <td>{data.Email}</td>
      <td>{data.Password}</td>
      <td>
        <i class="bi bi-trash text-danger"onClick={() => deleteuser(data._id)}></i>
      </td>
    </tr>
    )})

    const deleteuser = (id) => {
      axios.delete(`http://localhost:8080/userdelete/${id}`).then((res) => {
        alert("user deleted")
        Setuser(user.filter(data => data._id !== id))
      }).catch((err) => {
        alert(err)
      })
    }
  return (
    <div>
      <div className="container">
        <div className="row p-3 adminDoc_top_row">
          <div className="col">
            <h4>PATIENTS LIST</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-3">
            <div className="card">
              <div class="card-body table-responsive pe-4">
                <table class="table table-hover  adminHome_Appoinment-Table ">
                  <thead className="adminHome_Appoinment-TableHead">
                    <tr>
                      <th scope="col">User_Id</th>
                      <th scope="col">First_name</th>
                      <th scope="col">Second_name</th>
                      <th scope="col">Email_Address</th>
                      <th scope="col">Password</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userlist}
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

export default AdminPatient;
