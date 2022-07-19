import React from "react";
import User from "../Images/icons8-user-100.png";
import { Link } from "react-router-dom";

const AdminAppoinment = () => {
  return (
    <div>
      {" "}
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
                  <Link
                    to={"/adminPayment"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-credit-card-2-back"></i>
                    <span>Payments</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-truck"></i>
                    <span>Delivery</span>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-md-10 adminRight_col " id="style-3">
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
                        ></button>
                      </div>
                      <div class="modal-body ">
                        <form class="row g-3">
                          <div class="col-md-12">
                            <label for="inputGender" class="form-label">
                              Specialist
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Specialist 1</option>
                              <option value="2">Specialist 2</option>
                              <option value="2">Specialist 2</option>
                              <option value="2">Specialist 2</option>
                              <option value="2">Specialist 2</option>
                              <option value="2">Specialist 2</option>
                            </select>
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Doctor
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Doctor 1</option>
                              <option value="2">Doctor 2</option>
                              <option value="2">Doctor 2</option>
                              <option value="2">Doctor 2</option>
                              <option value="2">Doctor 2</option>
                              <option value="2">Doctor 2</option>
                            </select>
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Time Period
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Time Period 1</option>
                              <option value="2">Time Period 2</option>
                              <option value="2">Time Period 2</option>
                              <option value="2">Time Period 2</option>
                              <option value="2">Time Period 2</option>
                              <option value="2">Time Period 2</option>
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
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Select Gender
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Male</option>
                              <option value="2">Female</option>
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
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputAge" class="form-label">
                              Age
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAge"
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputEmail" class="form-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail"
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
                            />
                          </div>

                          <div class="col-12">
                            <button
                              type="submit"
                              class="AdminDoctor_modal_Submit_Btn"
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
                          <th scope="col">Age</th>
                          <th scope="col">Email</th>
                          <th scope="col">NIC</th>
                          <th scope="col">Mobile</th>
                          <th scope="col">Address</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Rajapaksha</td>
                          <td>Pshyco</td>
                          <td>Gotabhaya</td>
                          <td>May.9</td>
                          <td>10.00am</td>
                          <td>Male</td>
                          <td>75</td>
                          <td>Mahinda@gmail.com</td>
                          <td>123456789v</td>
                          <td>075123456</td>
                          <td>Colombo</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                      </tbody>
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

export default AdminAppoinment;
