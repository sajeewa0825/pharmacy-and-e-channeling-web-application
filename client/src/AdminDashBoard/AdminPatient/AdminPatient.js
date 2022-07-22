import React from "react";
import "./AdminPatient.css";

const AdminPatient = () => {
  return (
    <div>
      <div className="container">
        <div className="row p-3 adminDoc_top_row">
          <div className="col">
            <h4>PATIENTS LIST</h4>
          </div>
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              class="AdminDoctor_AddDoc_btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="bi bi-plus-circle"></i>Add Patient
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
                      ADD PAITENTS
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
                        <label for="inputPassword" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPassword"
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
                      <th scope="col">User_Id</th>
                      <th scope="col">First_name</th>
                      <th scope="col">Second_name</th>
                      <th scope="col">Email_Address</th>
                      <th scope="col">Password</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
                      <td>
                        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                        <i class="bi bi-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
                      <td>
                        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                        <i class="bi bi-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
                      <td>
                        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                        <i class="bi bi-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
                      <td>
                        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                        <i class="bi bi-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
                      <td>
                        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
                        <i class="bi bi-trash text-danger"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Mahinda</td>
                      <td>Rajapaksha</td>
                      <td>Mahinda@gmail.com</td>
                      <td>mhinda123</td>
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
  );
};

export default AdminPatient;
