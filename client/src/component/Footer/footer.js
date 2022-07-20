import React from "react";
import "./footer.css";
import Logo from "../NavBar/image/Group 4.svg";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div>
      <div className="container-fluid Footer-Head">
        <div className="row">
          <div className="col">
            <h1 className="Footer-Head-h1">JOIN WITH MEDISUITE</h1>
          </div>

          <div className="col LandingPage-Col-btn">
            <div className="LandingPage-LogingBtn ">
              <button type="button" className=" Footer-Btn">
                <Link className="LandingPagey_btnLink-1" to={"/signin"}>
                  Singin
                </Link>
              </button>
              <button type="button" className="Footer-Btn">
                <Link className="LandingPagey_btnLink-1" to={"/signup"}>
                  SingUp
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer-body">
        <div class="container">
          <div class="row py-3">
            <div className="col-lg footer-col-1 pt-5">
              <img src={Logo} alt="Logo" />
              <p className="footer-col1-p">
                For over 32 years, Medisuite Pharmacy has been providing you
                with genuine medicines round-the-clock, through 24-hour
                pharmacies. And now through medisuite Pharmacy, we intend to
                make your lives easier.
              </p>
              <p className="footer-col1-p">
                No more stepping out to get your medicines, no more standing in
                long queues, Here are more reasons why you should buy your
                medicines from medisuite
              </p>
            </div>
            <div className="col-sm footer-col pt-5">
              <h1 className="footer-col-Heading">Contact Info</h1>
              <h4 className="footer-contact-li">
                Call us free :<br />
                <span>+0123456789</span>
              </h4>
              <h4 className="footer-contact-li">No 03, Badulla</h4>
              <h4 className="footer-contact-li">medisuite@gmail.com</h4>
              <h4 className="footer-contact-li">
                Hour:8.00 - 20.00 , Mon - Sat
              </h4>
            </div>
            <div className="col-sm footer-col pt-5">
              <h1 className="footer-col-Heading">Quick Links</h1>
              <ul className="Footer-Links-ul">
                <Link to="/phhome" className="Footer-Link">
                  <li>Pharmacy</li>
                </Link>
                <Link to="/drhome" className="Footer-Link">
                  <li>Doctor Page</li>
                </Link>
                <Link to="/phshop" className="Footer-Link">
                  <li>Shop</li>
                </Link>
                <Link to="/phaboutus" className="Footer-Link">
                  <li>About Us</li>
                </Link>
                <Link to="/contactUs" className="Footer-Link">
                  <li>ContactUs</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="row">
            <span className="footer-Social-icon">
              <i class="bi bi-facebook icon-footer"></i>
              <i class="bi bi-youtube icon-footer"></i>
              <i class="bi bi-instagram icon-footer"></i>
              <i class="bi bi-twitter"></i>
            </span>
          </div>
        </div>

        <div class="Footer-bottom py-2">
          <div class="container text-center">
            <p class="mb-0 py-2 Footer-bottom-p">
              Medisuite &copy; 2022 All risghts reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default footer;
