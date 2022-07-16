import React, { Component } from "react";
import NavBar from "../NavBar/nav";
import "./Aboutus.css";

import Image2 from "./picture/How-to-Become-a-Pharmacist.jpg";
import Image3 from "./picture/img9.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div class="Aboutus-container">
            <div class="Aboutus-header">
              <h4>About Us</h4>
              <h6>know more about us, we are more than a pharmacy...</h6>
              <img src={Image2} alt="medkit" />
              <p>
                Medkit Pharmacy is one of Sri Lanka's most trusted
                pharmacies,experience in dispensing quality medicines. We help
                you look after your own health effortlessly as well as take care
                of loved ones wherever they may reside in Sri Lanka. We are
                Offer fast online access to medicines with convenient home
                delivery. Just log on to our website, place your order online
                and have your medicines delivered to you – without leaving the
                comfort of your home. We are committed to provide safe, reliable
                and affordable medicines as well as a customer service
                philosophy that is worthy of our valued customers’ loyalty. We
                offer a superior online shopping experience, which includes ease
                of navigation and absolute transactional security.
              </p>
            </div>
            <div class="Aboutus-Services">
              <h2>Our Services</h2>
            </div>
            <div class="Aboutus-row">
              <div class="Aboutus-column">
                <div class="Aboutus-card">
                  <div class="Aboutus-icon-wrapper">
                    <i class="fas fa-user-md"></i>
                  </div>
                  <h3>Online Doctor Consultation</h3>
                  <p>
                    There are several ways to reach out to a doctor without the
                    need to visit a hospital or clinic, all thanks to
                    technology. With the online facility available, doctor
                    consultations have become easier, which can help you get the
                    right health care.
                  </p>
                </div>
              </div>
              <div class="Aboutus-column">
                <div class="Aboutus-card">
                  <div class="Aboutus-icon-wrapper">
                    <i class="fas fa-hand-holding-medical"></i>
                  </div>
                  <h3>Wellness</h3>
                  <p>
                    we not only provide you with a wide range of medicines
                    listed under various categories, we also offer a wide choice
                    of OTC products including wellness products, vitamins,
                    diet/fitness supplements, herbal products, pain relievers,
                    diabetic care kits, baby/mother care products, beauty care
                    products and surgical supplies.
                  </p>
                </div>
              </div>
              <div class="Aboutus-column">
                <div class="Aboutus-card">
                  <div class="Aboutus-icon-wrapper">
                    <i class="fa fa-medkit"></i>
                  </div>
                  <h3>Medicine</h3>
                  <p>
                    Ordering medicines from Medkit Pharmacy online medical store
                    is quick and hassle-free.
                  </p>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                {/* <!-- about left  --> */}
                <div class="col-md-4 about-left">
                  <img src={Image3} />
                </div>
                {/* <!-- about right  --> */}
                <div class=" col-md-8 about-right">
                  <div class="address">
                    <ul>
                      <li>
                        <span class="address-logo">
                          <i class="fas fa-paper-plane"></i>
                        </span>
                        <p>
                          Address:
                          <span className="ms-4">Colombo, Sri Lanka</span>
                        </p>
                      </li>
                      <li>
                        <span class="address-logo">
                          <i class="fas fa-phone-alt"></i>
                        </span>
                        <p>
                          Phone No: <span className="ms-3">+94112375888</span>{" "}
                        </p>
                      </li>
                      <li>
                        <span class="address-logo">
                          <i class="far fa-envelope"></i>
                        </span>
                        <p>
                          Email:{" "}
                          <span className="ms-5">medisuite@gmail.com</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="Aboutus-footer">
              <div class="Aboutus-wrapper">
                <h2>Follow Us</h2>
                <a href="#" class="icon facebook">
                  <div class="tooltip">Facebook</div>
                  <span>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </a>
                <a href="#" class="icon twitter">
                  <div class="tooltip">Twitter</div>
                  <span>
                    <i class="fab fa-twitter"></i>
                  </span>
                </a>
                <a href="#" class="icon instagram">
                  <div class="tooltip">Instagram</div>
                  <span>
                    <i class="fab fa-instagram"></i>
                  </span>
                </a>
                <a href="#" class="icon youtube">
                  <div class="tooltip">Youtube</div>
                  <span>
                    <i class="fab fa-youtube"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
