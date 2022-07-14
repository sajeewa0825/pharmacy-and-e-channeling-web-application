import React from "react";
import "./doctShop.css";
import Doctors from "./ImageDoc/Doctors.png";
import Parmacy from "./ImageDoc/Parmacy.png";

const DoctShop = () => {
  return (
    <div>
      <div className="container DoctShopSec">
        <div className="row">
          <div className="col-lg-6 DoctShopSecDiv">
            <h4>Doctors Appoinment</h4>
            <div className="DoctorPharmacySection">
              <img src={Doctors} className="DocPharImg" />
              <h5 className="text-muted DocPharText">
                <b>Meet with an Online Doctor Today</b>
                <br /> Do you have a question or concern that would be best
                handled by a medical professional? An online doctor can speak
                with you virtually to answer your questions and help you move
                forward with confidence.
                <br />
                <button type="button" class="btn  rounded-pill DocPhamBtn1">
                  Goto
                </button>
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Pharamecy Shop</h4>
            <div className="DoctorPharmacySection">
              <img src={Parmacy} className="DocPharImg" />
              <h5 className="text-muted DocPharText">
                <b>The Most Trusted Online Pharmacy in Sri Lanka</b>
                <br />
                medisuite is the most trusted online pharmacy with home delivery
                services in Sri Lanka. Now you can upload your prescriptions &
                get your medication delivered straight to your home at best
                rates from medisuite Online Pharmacy. All you need is a
                smartphone, tablet, or computer and a secure Internet
                connection.
                <br />
                <button type="button" class="btn  rounded-pill DocPhamBtn1">
                  Goto
                </button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctShop;
