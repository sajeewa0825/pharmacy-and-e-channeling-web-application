import React from "react";
import User from "./Images/icons8-user-100.png";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 adminLeft_col" id="style-3">
            <div className="sidemenu_top">
              <div className="sidemenu_top_User_img">
                <span>Logo</span>
                <hr />
                <img src={User} alt="img" />
                <span>Admin</span>
              </div>
            </div>
            <div className="sidemenu_center">
              <ul className="sidemenu_center_ul">
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-columns-gap"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-heart-pulse"></i>
                    <span>Doctor</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-people"></i>
                    <span>Patient</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-card-heading"></i>
                    <span>Appoinments</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-bag-plus"></i>
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-credit-card-2-back"></i>
                    <span>Payments</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-truck"></i>
                    <span>Delivery</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 adminRight_col">
            <div className="row adminRight_row">
              <div className="adminRight_top">
                <ul className="adminRight_top_ul">
                  <li>
                    <i class="bi bi-journal-text"></i>
                    <span>Make an appointment</span>
                  </li>
                  <li>
                    <i class="bi bi-pencil"></i>
                    <span>Write a prescription</span>
                  </li>
                  <li>
                    <i class="bi bi-journals"></i>
                    <span>Generate Report</span>
                  </li>
                  <li>
                    <i class="bi bi-bell icon_Bell me-3"></i>
                  </li>
                  <li>
                    <img src={User} alt="" width={"60px"} height={"60px"} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
