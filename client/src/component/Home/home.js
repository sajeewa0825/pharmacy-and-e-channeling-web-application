import React from "react";
import "./home.css";
import Img1 from "./image/item-1.jpg";
import Img2 from "./image/item-2.jpg";
import Img3 from "./image/item-3.jpg";
// import Catgry from "./svg/list-solid.svg";
import FeatureProduct from "../Products/FeatureProducts";
import ProductBlog from "../Products/ProductBlog/ProductBlog";
import DoctShop from "./Doctor&ShopSection/DoctShop";
import WhyShoosUs from "./WhyChooseUs/WhyShoosUs";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={Img1} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Img2} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={Img3} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <div className="row ">
          <div className="col-md-3">
            <div class="card border-0">
              <div class="card-body">
                <p class="card-text d-flex cardD">
                  <i class="bi bi-truck me-2 DetailCard"></i>
                  <span className="textCard ">
                    <h5 className="h5Text">Free Delivery</h5>
                    delivery to your home
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class=" border-0">
              <div class="card-body">
                <p class="card-text d-flex cardD">
                  <i class="bi bi-shield-lock me-2 DetailCard"></i>
                  <span className="textCard ">
                    <h5 className="h5Text">Money Guarantee</h5>
                    30 days back
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card border-0">
              <div class="card-body">
                <p class="card-text d-flex cardD">
                  <i class="bi bi-wallet me-2 DetailCard"></i>
                  <span className="textCard ">
                    <h5 className="h5Text">Payment Method</h5>
                    Secure System
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card border-0">
              <div class="card-body">
                <p class="card-text d-flex cardD">
                  <i class="bi bi-gear me-2 DetailCard"></i>
                  <span className="textCard ">
                    <h5 className="h5Text">Online Support</h5>
                    24 hours on day
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 pt-3">
        <DoctShop />
      </div>
      <div className="container-fluid FPSection1">
        <div className="container">
          <FeatureProduct />
        </div>
      </div>
      <div className="container pb-4">
        <ProductBlog />
      </div>
      <div className="container-fluid FPSection1">
        <div className="container">
          <WhyShoosUs />
        </div>
      </div>
    </div>
  );
};
export default Home;
