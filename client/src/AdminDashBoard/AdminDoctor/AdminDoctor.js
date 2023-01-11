import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDoctor.css";
import DOcIMG1 from "../Images/icons8-user-100.png";
import { Link } from "react-router-dom";
import User from "../Images/icons8-user-100.png";

const AdminDoctor = () => {
  const [doctordata, SetDoctordata] = useState([]);
  const [submit, Setsubmit] = useState("");
  const [user_id, Setuser_id] = useState("");

  useEffect(() => {
    const admin = localStorage.getItem("admintoken");
    const data = {
      token: admin,
    };
    axios
      .post("https://medisuite.herokuapp.com/adminverify", data)
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

    const getdata = () => {
      axios
        .get("https://medisuite.herokuapp.com/regdoctor")
        .then((res) => {
          console.log(res.data);
          SetDoctordata(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };

    getdata();
  }, []);

  const [name, Setname] = useState("");
  const [timePeriod, SettimePeriod] = useState("");
  const [Gender, SetGender] = useState("");
  const [Address, Setaddres] = useState("");
  const [Id, Setid] = useState("");
  const [Email, SetEmail] = useState("");
  const [P_no, SetPno] = useState("");
  const [specialist, Setspecialist] = useState("");
  const [Dob, SetDob] = useState("");

  const newdocotrdata = {
    name,
    timePeriod,
    Gender,
    Address,
    Id,
    Email,
    P_no,
    specialist,
    Dob,
  };

  const addDoctor = (e) => {
    e.preventDefault();
    axios
      .post("https://medisuite.herokuapp.com/regdoctor", newdocotrdata)
      .then((res) => {
        document.getElementById("form").reset();
        document.getElementById("closebtn").click();
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deletedoctor = (id) => {
    axios
      .delete(`https://medisuite.herokuapp.com/doctordelete/${id}`)
      .then((res) => {
        alert("Appointment deleted");
        SetDoctordata(doctordata.filter((data) => data._id !== id));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const doctorupdate = (Ddata) => {
    document.getElementById("openbtn").click();
    Setsubmit("UPDATE");
    SetDob(Ddata.Dob);
    SetEmail(Ddata.Email);
    SetGender(Ddata.Gender);
    Setname(Ddata.name);
    Setspecialist(Ddata.specialist);
    Setid(Ddata.Id);
    SetPno(Ddata.P_no);
    Setaddres(Ddata.Address);
    SettimePeriod(Ddata.timePeriod);
    Setuser_id(Ddata._id);
  };

  const updatedata = {
    name,
    timePeriod,
    Gender,
    Address,
    Id,
    Email,
    P_no,
    specialist,
    Dob,
  };

  const doctorupdatehandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://web-production-2bee.up.railway.app/doctorupdate/${user_id}`, updatedata)
      .then((res) => {
        Setuser_id("");
        Setsubmit("");
        document.getElementById("form").reset();
        document.getElementById("closebtn").click();
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const controlsubmit = (e) => {
    if (submit === "UPDATE") {
      doctorupdatehandler(e);
    } else {
      addDoctor(e);
    }
  };

  const docotrCart = doctordata.map((data) => {
    return (
      <div className="col-sm-4 p-3">
        <div class="AdminDoc_DocDtail_card">
          <div class="card-body  AdminDoc_DocDtail_card_body">
            <span>
              <i
                class="bi bi-pencil-fill me-3"
                onClick={(e) => doctorupdate(data)}
              ></i>
              <i
                class="bi bi-trash me-3"
                onClick={(e) => deletedoctor(data._id)}
              ></i>
            </span>
            <div className="AdminDoc_sec">
              <img src={DOcIMG1} alt="" className="Doc-Img" />
              <div className="AdminDoc_sec_Text">
                <h6>{data.name}</h6>
                <h7>{data.specialist}</h7>
                <p>
                  <i class="bi bi-geo-alt-fill"></i>
                  {data.Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="container-fluid AdminDoctor-container">
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
                <h4>DOCTORS LIST</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  type="button"
                  class="AdminDoctor_AddDoc_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  id="openbtn"
                >
                  <i class="bi bi-plus-circle"></i>Add Doctor
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
                          ADD DOCTORS
                        </h5>
                        <button
                          type="button"
                          class="btn-close AdminDoctor_modal_Head_Btn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          id="closebtn"
                        ></button>
                      </div>
                      <div class="modal-body ">
                        <form class="row g-3" id="form">
                          <div class="col-md-6">
                            <label for="inputName" class="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputName"
                              onChange={(e) => {
                                Setname(e.target.value);
                              }}
                              value={name}
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="inputSpecialist" class="form-label">
                              Specialist
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) => {
                                Setspecialist(e.target.value);
                              }}
                              value={specialist}
                            >
                              {doctor.map((data) => (
                                <option key={data.label} value={data.label}>
                                  {data.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div class="col-md-6">
                            <label for="inputTimePeriod" class="form-label">
                              Time Period
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputTimePeriod"
                              onChange={(e) => {
                                SettimePeriod(e.target.value);
                              }}
                              value={timePeriod}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail4"
                              onChange={(e) => {
                                SetEmail(e.target.value);
                              }}
                              value={Email}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputDOB" class="form-label">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              class="form-control"
                              id="inputDOB"
                              onChange={(e) => {
                                SetDob(e.target.value);
                              }}
                              value={Dob}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Select Gender
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                              onChange={(e) => {
                                SetGender(e.target.value);
                              }}
                              value={Gender}
                            >
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                            </select>
                          </div>

                          <div class="col-md-6">
                            <label for="inputIdNum" class="form-label">
                              Id Number
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputIdNum"
                              onChange={(e) => {
                                Setid(e.target.value);
                              }}
                              value={Id}
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
                              onChange={(e) => {
                                SetPno(e.target.value);
                              }}
                              value={P_no}
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
                              onChange={(e) => {
                                Setaddres(e.target.value);
                              }}
                              value={Address}
                            />
                          </div>
                          <div class="col-12">
                            <button
                              type="submit"
                              class="AdminDoctor_modal_Submit_Btn"
                              onClick={(e) => controlsubmit(e)}
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

            <div className="row row-cols-md-2 row-cols-lg-3">{docotrCart}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDoctor;

const doctor = [
  { label: "Select" },
  { label: "cardiologist" },
  { label: "dermatologist" },
  { label: "Counsiling psychologist" },
  { label: "cancer surgeon" },
];
