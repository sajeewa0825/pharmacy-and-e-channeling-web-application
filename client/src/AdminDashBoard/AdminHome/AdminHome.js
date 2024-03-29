import axios from "axios";
import React, { useState, useEffect } from 'react'
import "./AdminHome.css";

import { Link } from "react-router-dom";

const AdminHome = () => {
  const [user, Setuser] = useState([])
  const [Product, SetProduct] = useState([])
  const [appointment, Setappointment] = useState([])
  const [doctordata, SetDoctordata] = useState([])

  useEffect(() => {
    const getdata = () => {
      const admin =localStorage.getItem('admintoken')
      const data ={
        token :admin
      }
      console.log(data)
      axios.post("https://web-production-2bee.up.railway.app/adminverify",data).then((res) => {
          if(res.data.status === 200){
              console.log("admin verfiy")
          }else{
            localStorage.clear();
            window.location.href = '/signin'
          }
      }).catch((err) => {
        localStorage.clear();
        window.location.href = '/signin'
      })


      axios.get("https://web-production-2bee.up.railway.app/getuser").then((res) => {
        Setuser(res.data)
      }).catch((err) => {
        alert(err)
      })

      axios.get("https://web-production-2bee.up.railway.app/addproduct").then((res) => {
        console.log(res.data)
        SetProduct(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    axios.get("https://web-production-2bee.up.railway.app/getappointment").then((res) => {
      console.log(res.data)
      Setappointment(res.data)
    }).catch((err) => {
      alert(err)
    })

    axios.get("https://web-production-2bee.up.railway.app/regdoctor").then((res) => {
      console.log(res.data)
      SetDoctordata(res.data)
    }).catch((err) => {
      alert(err)
    })

    axios.get("https://web-production-2bee.up.railway.app/addproduct").then((res) => {
      console.log(res.data)
      SetProduct(res.data)
    }).catch((err) => {
      alert(err)
    })

    getdata();
  }, [])

  const appointmentlist = appointment.map((data) => {
    return (
      <tr>
        <td>
          <i class="bi bi-person"></i>{data.F_name}
        </td>
        <td>{data.Dr_name}</td>
        <td>{data.Date}</td>
        <td>{data.Time}</td>
        <td>{data.P_no}</td>
      </tr>
    )
  })


  const doctorlist = doctordata.map((data) => {
    return (
      <li class="list-group-item p-3">{data.name}</li>
    )
  })

  const product = Product.map((data) => {
    return (
      <tr key={data._id}>
      <td>
        {data._id}
      </td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.qty}</td>
    </tr>
    )})


  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 p-4">
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">DOCTORS</span>
                  <span>{doctordata.length}</span>
                </div>
                <i class="fas fa-stethoscope"></i>
              </div>
            </div>
          </Link>

          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">PATIENTS</span>
                  <span>{user.length}</span>
                </div>
                <i class="bi bi-people"></i>
              </div>
            </div>
          </Link>
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">APPOINMENTS</span>
                  <span>{appointment.length}</span>
                </div>
                <i class="bi bi-card-heading"></i>
              </div>
            </div>
          </Link>
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">PRODUCTS</span>
                  <span>{Product.length}</span>
                </div>
                <i class="bi bi-bag-plus"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="row ps-4 pe-4">
          <div className="col-lg-8">
            <div className="card">
              <div class="card border-0 shadow">
                <li class="list-group-item p-3 border-top-0 border-end-0 border-start-0 ">
                  UPCOMING APPOINTMENTS
                </li>

                <div class="card-body table-responsive pe-4">
                  <table
                    class="table table-hover  adminHome_Appoinment-Table "
                    id="style-2"
                  >
                    <thead className="adminHome_Appoinment-TableHead">
                      <tr>
                        <th scope="col">Patient</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointmentlist}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <div className="card">
              <div className="card-body">
                <ul class="list-group ">
                  <li class="list-group-item p-3">DOCTOR LIST</li>
                  {doctorlist}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ps-4 pe-4">
          <div className="col-lg-12">
            <div class="card border-0 shadow">
              <li class="list-group-item p-3 border-top-0 border-end-0 border-start-0 ">
                NEW PRODUCTS
              </li>

              <div class="card-body table-responsive">
                <table class="table table-hover adminHome_Appoinment-Table ">
                  <thead className="adminHome_Appoinment-TableHead">
                    <tr>
                      <th scope="col">Product ID</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">QTY</th>
                    </tr>
                  </thead>
                  <tbody>
                  {product}
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

export default AdminHome;
