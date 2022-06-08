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
                Ut cillum anim irure ex sint cillum magna sunt consequat dolore
                esse quis et. Officia ex aliquip laborum mollit aliqua quis
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
                Ut cillum anim irure ex sint cillum magna sunt consequat dolore
                esse quis et. Officia ex aliquip laborum mollit aliqua quis
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
