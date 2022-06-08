import React from "react";
import MedicalTeam from "./WhyChooseUsImg/medical-team.png";
import MedicalPharmacy from "./WhyChooseUsImg/pharmacy.png";
import MedicalEquip from "./WhyChooseUsImg/medical-equipment.png";
import MedicalVet from "./WhyChooseUsImg/dog.png";
import Medical24 from "./WhyChooseUsImg/24-hours.png";
import MedicalChat from "./WhyChooseUsImg/chat.png";
import MedicalBlood from "./WhyChooseUsImg/glucose-meter.png";
import MedicalFriendly from "./WhyChooseUsImg/support.png";
import "./WhyChooseUs.css";

const WhyShoosUs = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3>Why Choose Us</h3>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalTeam} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Qualified Doctors.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalPharmacy} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Pharmacy Support.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalVet} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">
                  Veterinary Services.
                </h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={Medical24} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">24 Hour Service.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalFriendly} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Friendly Service.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalEquip} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Equipment Shop.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalBlood} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Blood Reports.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card mb-3 text-center WhyChoosUsCard">
              <div class="card-body">
                <img src={MedicalChat} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Customer care.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyShoosUs;
