import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AdminPatient.css";
import { Link } from "react-router-dom";
import User from "../Images/icons8-user-100.png";

const AdminPatient = () => {
  const [user, Setuser] = useState([]);

  useEffect(() => {
    const getdata = () => {
      const admin = localStorage.getItem("admintoken");
      const data = {
        token: admin,
      };
      axios
        .post("https://web-production-2bee.up.railway.app/adminverify", data)
        .then((res) => {
          if (res.data.status === 200) {
            console.log("admin verfiy");
          } else {
            localStorage.clear();
            window.location.href = "/signin";
          }
        })
        .catch((err) => {
          localStorage.clear();
          window.location.href = "/signin";
        });

      axios
        .get("https://web-production-2bee.up.railway.app/getuser")
        .then((res) => {
          Setuser(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };

    getdata();
  }, []);

  const userlist = user.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data._id}</td>
        <td>{data.F_name}</td>
        <td>{data.L_name}</td>
        <td>{data.Email}</td>
        <td>{data.Password}</td>
        <td>
          <i
            class="bi bi-trash text-danger"
            onClick={() => deleteuser(data._id)}
          ></i>
        </td>
      </tr>
    );
  });

  const deleteuser = (id) => {
    axios
      .delete(`https://web-production-2bee.up.railway.app/userdelete/${id}`)
      .then((res) => {
        alert("user deleted");
        Setuser(user.filter((data) => data._id !== id));
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 adminLeft_col" id="style-3">
            <div className="sidemenu_top">
              <div className="sidemenu_top_User_img">
                <span>MEDISUITE</span>
                <hr />
                <img src={User} alt="img" />
                <span>Admin</span>
              </div>
            </div>
            <div className="sidemenu_center">
              <ul className="sidemenu_center_ul">
                <li>
                  <Link to={"/admin"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-columns-gap"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link to={"/adminDoctor"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-heart-pulse"></i>
                    <span>Doctor</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminPatient"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-people"></i>
                    <span>Patient</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminAppoinment"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-card-heading"></i>
                    <span>Appoinments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminProduct"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-bag-plus"></i>
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-box-arrow-left"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 adminRight_col " id="style-3">
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
                      <tbody>{userlist}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPatient;
