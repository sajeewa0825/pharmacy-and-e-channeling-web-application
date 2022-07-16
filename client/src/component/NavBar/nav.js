import React from "react";
import Logo from "./image/phy.png";
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
              width="50"
              height="34"
              className="d-inline-block align-text-center"
            />
            Pharmacy
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
                  <i className="fa fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phaboutus"}>
                  <i className="fa fa-handshake-o"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>
                  <i className="fa fa-usd"></i>Contactus
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phshop"}>
                  <i className="fa fa-shopping-bag"></i>Shop
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <button
              type="button"
              className="btn btn-none position-relative me-1 p-0"
            >
              <i className="bi bi-cart3 fs-4 text-black "></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle CartBadge ">
                2<span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button type="button" className="btn  ">
              <i className="bi bi-person text-black fs-4"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navBar;
