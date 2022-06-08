import React from "react";
import Logo from "./image/phy.png";
import "./nav.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/home";
import AboutUs from "./../About/About";
import Price from "./../Price/price";
import Shop from "../shop/shop";
import phone from "./image/phone-solid.svg";
import loca from "./image/location-dot-solid.svg";
import clockIcon from "./image/clock-solid.svg";

const navBar = () => {
  return (
    <div>
      <Router>
        <div className="container-fluid">
          <div className="row bg-dark ">
            <div class="col-12 d-flex justify-content-center ">
              <ul className="details">
                <li>
                  <img className="iconNav" src={phone} />
                  <span className="iconNavText">Hotline: +0123456789</span>
                </li>
                <li>
                  <img className="iconNav" src={loca} />
                  <span className="iconNavText">Address: No3, Badulla</span>
                </li>
                <li>
                  <img className="iconNav" src={clockIcon} />
                  <span className="iconNavText">Mon-Sat 8.00am-8.00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src={Logo}
                alt=""
                width="60"
                height="44"
                class="d-inline-block align-text-center"
              />
              Pharmacy
            </a>
            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end "
              id="navbarNavDropdown"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    <i class="fa fa-home"></i>Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about-us">
                    <i class="fa fa-handshake-o"></i> About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/price">
                    <i class="fa fa-usd"></i>Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/shop">
                    <i class="fa fa-shopping-bag"></i>Shop
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="collapse navbar-collapse justify-content-end "
              id="navbarNavDropdown"
            >
              <button
                type="button"
                class="btn btn-none position-relative me-1 p-0"
              >
                <i class="bi bi-cart-plus fs-8 text-black"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger ">
                  2<span class="visually-hidden">unread messages</span>
                </span>
              </button>
              <button type="button" class="btn  ">
                <i class="bi bi-person-circle text-black"></i>
              </button>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/price">
            <Price />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default navBar;
