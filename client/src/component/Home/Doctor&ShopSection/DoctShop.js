import React from "react";
import "./doctShop.css";
import Doctors from "./ImageDoc/Doctors.png";
import Parmacy from "./ImageDoc/Frame 3.svg";
import { Link } from "react-router-dom";

const DoctShop = () => {
  return (
    <div>
      <div className="container DoctShopSec">
        <div className="row">
          <div className="col-lg-6 DoctShopSecDiv">
            <h4>MEET YOUR DOCTOR</h4>
            <div className="DoctorPharmacySection">
              <img src={Doctors} className="DocPharImg" />
              <h5 className="DocPharText">
                Meet with an Online Doctor Today
                <Link to={"/drhome"}>
                  <button type="button" class="DocPhamBtn1">
                    Goto
                  </button>
                </Link>
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>VISIT OUR PHARMACY</h4>
            <div className="DoctorPharmacySection">
              <img src={Parmacy} className="DocPharImgLogo" />
              <h5 className=" DocPharText">
                The Most Trusted Online Pharmacy in Sri Lanka
                <Link to={"/phshop"}>
                  <button type="button" class="DocPhamBtn1">
                    Goto
                  </button>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctShop;
