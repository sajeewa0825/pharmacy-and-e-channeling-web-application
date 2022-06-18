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
        <h3>Why Choose Us</h3>
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
          <div className="col">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
              <div class="card-body">
                <img src={MedicalEquip} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Medi Tools.</h4>
                <p className="WhyChooseUsCardText">
                  Anim tempor ex occaecat in in.Et officia cillum reprehenderit
                  labore commodo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
          <div className="col-sm">
            <div class=" mb-3 text-center whyChoosUsCard">
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
