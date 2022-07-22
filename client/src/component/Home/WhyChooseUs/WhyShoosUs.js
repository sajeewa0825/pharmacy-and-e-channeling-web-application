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
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 d-flex justify-content-center">
          <div className="col">
            <div class=" mb-3 text-center whyChoosUsCard">
              <div class="card-body">
                <img src={MedicalTeam} className="WhyChoosUsCardIMG" />
                <h4 className="WhyChoosUsCardHeaderText">Qualified Doctors.</h4>
                <p className="WhyChooseUsCardText">
                  Connect with a qualified doctor from the comfort of your home
                  and You can speak with them
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
                  Select your preferred medicine online and have it delivered
                  straight to your home.
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
                  Offer unique class veterinary products produced and delivered
                  in a creative and innovative way
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
                  We assure you that we are at your service for 24 hours.Consult
                  your doctor from your home.
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
                  Our team will help you better understand and manage your
                  prescriptions and over-the-counter.
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
                  We are facilitated with best machines and tools for highly
                  advantagble for our patients.
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
                  Blood reports can be within 1 hour with clear details for your
                  own reference
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
                  Our team provides a customer satisfied area which build and
                  friendly connection with customers
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
