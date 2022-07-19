import React from "react";
import User from "../Images/icons8-user-100.png";
import { Link } from "react-router-dom";

const AdminPayment = () => {
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
                <h4>PAYMENT LIST</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  type="button"
                  class="AdminDoctor_AddDoc_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="bi bi-plus-circle"></i>Add Payment
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
                          ADD PAYMENT
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
                          <div class="col-md-6">
                            <label for="inputPaymenPatient" class="form-label">
                              Patient Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPaymenPatient"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="inputPaymentDate" class="form-label">
                              Payment Date
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputPaymentDate"
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputAmount" class="form-label">
                              Total Amount
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAmount"
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Payment Mode
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Credit Card</option>
                              <option value="2">Debit Card</option>
                            </select>
                          </div>

                          <div class="col-md-6">
                            <label for="inputGender" class="form-label">
                              Payment Status
                            </label>
                            <select
                              class="form-select"
                              aria-label="Default select example"
                            >
                              <option value="1">Complete</option>
                              <option value="2">Pending</option>
                            </select>
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
            <div className="row ">
              <div className="col-lg-12 p-3">
                <div class="card ">
                  <div class="card-body table-responsive pe-4">
                    <table class="table table-hover  adminHome_Appoinment-Table ">
                      <thead className="adminHome_Appoinment-TableHead">
                        <tr>
                          <th scope="col">Invoice_Id</th>
                          <th scope="col">Patient_name</th>
                          <th scope="col">Payment_Mode</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

                          <td>
                            <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                            <i class="bi bi-trash text-danger"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>01</td>
                          <td>Mahinda</td>
                          <td>Credit</td>
                          <td>$500</td>
                          <td>Pending</td>

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

export default AdminPayment;
