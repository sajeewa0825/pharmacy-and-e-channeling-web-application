import React from "react";
import Logo from "./image/Group 4.svg";
import "./nav.css";
import { Link } from "react-router-dom";
// import phone from "./image/phone-solid.svg";
// import loca from "./image/location-dot-solid.svg";
// import clockIcon from "./image/clock-solid.svg";

const navBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/phhome">
            <img
              src={Logo}
              alt=""
              className="d-inline-block align-text-center"
            />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to={"/phhome"}
                >
                  <i class="fa fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phaboutus"}>
                  <i className="fa fa-handshake-o"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/drhome"}>
                  <i class="fa fa-stethoscope"></i>Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phshop"}>
                  <i className="fa fa-shopping-bag"></i>Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contactUs"}>
                  <i className="fa fa-mobile"></i>Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <Link to={"/cart"}>
              {" "}
              <button
                type="button"
                className=" btn-none position-relative me-1 p-0"
              >
                <i className="bi bi-cart3 fs-4 text-black "></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle CartBadge ">
                  0<span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navBar;
