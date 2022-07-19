import React from "react";
import "./AdminDoctor.css";
import DOcIMG1 from "../Images/icons8-user-100.png";
import User from "../Images/icons8-user-100.png";
import { Link } from "react-router-dom";

const AdminDoctor = () => {
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
                <h4>DOCTORS LIST</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  type="button"
                  class="AdminDoctor_AddDoc_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
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
                        ></button>
                      </div>
                      <div class="modal-body ">
                        <form class="row g-3">
                          <div class="col-md-6">
                            <label for="inputName" class="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputName"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="inputSpecialist" class="form-label">
                              Specialist
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputSpecialist"
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputTimePeriod" class="form-label">
                              Time Period
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputTimePeriod"
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
            {/* doctor card */}

            <div className="row row-cols-md-2 row-cols-lg-3">
              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 p-3">
                <div class="AdminDoc_DocDtail_card">
                  <div class="card-body  AdminDoc_DocDtail_card_body">
                    <span>
                      <i class="bi bi-pencil-fill me-3"></i>
                      <i class="bi bi-trash me-3"></i>
                    </span>
                    <div className="AdminDoc_sec">
                      <img src={DOcIMG1} alt="" className="Doc-Img" />
                      <div className="AdminDoc_sec_Text">
                        <h6>Doctor_1</h6>
                        <h7>Pshyco</h7>
                        <p>
                          <i class="bi bi-geo-alt-fill"></i>Colombo
                        </p>
                      </div>
                    </div>
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

export default AdminDoctor;
