import React from "react";
import "./AdminHome.css";
import Steth from "./stethoscope.png";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 p-4">
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">DOCTORS</span>
                  <span>1500</span>
                </div>
                <i class="fas fa-stethoscope"></i>
              </div>
            </div>
          </Link>

          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">DOCTORS</span>
                  <span>1500</span>
                </div>
                <i class="fas fa-stethoscope"></i>
              </div>
            </div>
          </Link>
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">DOCTORS</span>
                  <span>1500</span>
                </div>
                <i class="fas fa-stethoscope"></i>
              </div>
            </div>
          </Link>
          <Link to={"./#"} className="adminHome_Link">
            <div className="col adminHome_col">
              <div class="adminHome_Card">
                <div class="card-body adminHome_Card_Body">
                  <span className="pb-2">DOCTORS</span>
                  <span>1500</span>
                </div>
                <i class="fas fa-stethoscope"></i>
              </div>
            </div>
          </Link>
        </div>
        <div className="row ps-4">
          <div className="col-lg-8">
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
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <ul class="list-group pe-4 pt-4">
              <li class="list-group-item p-3">DOCTOR LIST</li>
              <li class="list-group-item p-3">A second item</li>
              <li class="list-group-item p-3">A third item</li>
              <li class="list-group-item p-3">A fourth item</li>
              <li class="list-group-item p-3">And a fifth one</li>
              <li class="list-group-item p-3">And a fifth one</li>
              <li class="list-group-item p-3">And a fifth one</li>
            </ul>
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
                      <th scope="col">Product Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
                    </tr>
                    <tr>
                      <td>
                        <i class="bi bi-person"></i>Mark
                      </td>
                      <td>Otto</td>
                      <td>2020-7-9</td>
                      <td>10.00 a.m</td>
                      <td>0712345678</td>
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

export default AdminHome;
