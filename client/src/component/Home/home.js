import React from "react";
import "./home.css";
import Img1 from "./image/item-1.jpg";
import Img2 from "./image/item-2.jpg";
import Img3 from "./image/item-3.jpg";
import AboutImg from "./image/about-us.png";
import FeatureProduct from "../Products/FeatureProducts";
import ProductBlog from "../Products/ProductBlog/ProductBlog";
import DoctShop from "./Doctor&ShopSection/DoctShop";
import WhyShoosUs from "./WhyChooseUs/WhyShoosUs";
import OurTeam from "./OurTeam/OurTeam";
import NavBar from "../NavBar/nav";

const Home = () => {
  return (
    <div>
      <NavBar />
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
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={Img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={Img3} class="d-block w-100" alt="..." />
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
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={AboutImg}
              class="img-fluid rounded-top mark-lazy"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div class="content">
              <div class="title">Welcome to Medisuite</div>
              <h3 class="text-theme-color">
                Order medicine online from Medisuite pharmacy
              </h3>
              <p class="description">
                For over 32 years, Medisuite Pharmacy has been providing you
                with genuine medicines round-the-clock, through 24-hour
                pharmacies. And now through medisuite Pharmacy, we intend to
                make your lives easier – by getting your medicines delivered to
                you. Yes, no more stepping out to get your medicines, no more
                standing in long queues, no more worrying about the genuineness
                of medicines, no more sweat! Here are more reasons why you
                should buy your medicines from medisuite Pharmacy:
              </p>
              <ul>
                <li>
                  Super-fast deliveries. In select cities, deliveries are done
                  in as less as 1 day
                </li>
                <li>Attractive deals on medicines and other FMCG products</li>
                <li>
                  Get Health Credits on purchases (not applicable on discounted
                  products)
                </li>
                <li>
                  Prescriptions can be uploaded directly to place an order
                </li>
                <li>
                  Option to consult with a pharmacologist to check medicine
                  interactions
                </li>
                <li>Wide range of healthcare products to choose from</li>
                <li>Only genuine and top-quality products delivered.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid FPSection1">
        <div className="container pt-2 pb-2">
          <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
            <div className="col">
              <div class="border-0">
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
            <div className="col">
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
            <div className="col">
              <div class="border-0">
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
            <div className="col">
              <div class="border-0">
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
      <div className="container-fluid">
        <OurTeam />
      </div>
    </div>
  );
};
export default Home;
