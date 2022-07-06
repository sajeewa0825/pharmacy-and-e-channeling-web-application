import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import BGImage from "./Image/26807.jpg";
// import { TextField } from "@mui/material/TextField";
// import Drservice from "./../DoctorPage/component/dService/drService";

const Landing = () => {
  return (
    <div>
      <div className="LandingPage">
        <img src={BGImage} className="LandingPage-bgImg" alt="" />
        <div className="LandingPage-LogingBtn ">
          <button type="button" className=" LandingPage-LogingBtnDesign me-2">
            <Link className="LandingPagey_btnLink" to={"/signin"}>
              <i class="bi bi-person fs-5 me-2"></i>Singin
            </Link>
          </button>
          <button type="button" className=" LandingPage-LogingBtnDesign">
            <Link className="LandingPagey_btnLink" to={"/signup"}>
              <i class="bi bi-person-plus fs-5 me-2"></i>SingUp
            </Link>
          </button>
        </div>
        <div className="LandingPage-Heading">
          <h1 className="LandingPage-Heading_Text">Landing page</h1>
          <h3 className="LandingPage-Text">
            Sit exercitation eu aliquip esse pariatur. Voluptate esse nulla ut
            ad cupidatat elit officia ullamco occaecat eiusmod enim voluptate
            esse do. Do do ea sint sint cupidatat occaecat est. Laboris magna
            pariatur aliqua cillum dolore in duis enim voluptate ullamco cillum
            cupidatat.
          </h3>
          <button type="button" className=" LandingPagey_btnPharmacy me-2">
            <Link className="LandingPagey_btnLink_btn" to={"/phhome"}>
              Pharmacy
            </Link>
          </button>
          <button type="button" className=" LandingPagey_btnDoctor">
            <Link className="LandingPagey_btnLink_btn" to={"/drhome"}>
              Doctor
            </Link>
          </button>
          <button type="button" className=" LandingPagey_btnDoctor">
            <Link className="LandingPagey_btnLink_btn" to={"/admin"}>
              Admin
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
