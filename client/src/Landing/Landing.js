import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Logo from "../component/NavBar/image/Group 4.svg";
import BGImage from "./Image/Group 3.png";
// import { TextField } from "@mui/material/TextField";
// import Drservice from "./../DoctorPage/component/dService/drService";

const Landing = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col landingPage-Row">
            <Link className="navbar-brand" to="#">
              <img
                src={Logo}
                alt="logo"
                className="d-inline-block align-text-center"
              />
            </Link>
            <div className="col LandingPage-Col-btn">
              <div className="LandingPage-LogingBtn ">
                <button
                  type="button"
                  className=" LandingPage-LogingBtnDesign-1 me-2"
                >
                  <Link className="LandingPagey_btnLink-1" to={"/signin"}>
                    Singin
                  </Link>
                </button>
                <button
                  type="button"
                  className=" LandingPage-LogingBtnDesign-2"
                >
                  <Link className="LandingPagey_btnLink-2" to={"/signup"}>
                    SingUp
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row LandingPageBody-Row ">
          <div className="col-sm-5 ps-5">
            <h1 className="LandingPageBody-heading">
              Consult Doctors Protect Yourself and Family
            </h1>
            <h4 className="LandingPageBody-Text">
              We can help you find available vaccine appointments near you or
              notify you when availability opens up.
            </h4>
            <div className="col LandingPageBody-btn">
              <div className="LandingPage-LogingBtn ">
                <button className=" LandingPage-HomeBtnDesign-1">
                  <Link className="LandingPage_HomebtnLink-1" to={"/signin"}>
                    Pharmecy
                  </Link>
                </button>
                <button className="LandingPage-HomeBtnDesign-2">
                  <Link className="LandingPage_HomebtnLink-2" to={"/signup"}>
                    Doctor
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <img src={BGImage} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
