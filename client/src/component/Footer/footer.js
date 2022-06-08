import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <div>
      <footer class="footer-body">
        <div class="container py-5">
          <div class="row py-3">
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase font-weight-bold mb-4 text-white">
                About
              </h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Contact Us
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    About Us
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Stories
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase font-weight-bold mb-4 text-white">
                Help
              </h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Payments
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Shipping
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Cancellation
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase font-weight-bold mb-4 text-white">
                Policy
              </h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Return Policy
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Terms Of Use
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Security
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h5 class="text-uppercase mb-4 font-weight-bold text-white">
                Company
              </h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Login
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Register
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Sitemap
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="text-muted">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-lg-0 justify-content-center">
              <h5 class="text-uppercase font-weight-bold mb-4 text-white">
                Registered Office Address
              </h5>
              <p class="text-white mb-4">
                Here , write the complete address of the Registered office
                address along with telephone number.
              </p>
              <ul class="list-inline mt-4 ">
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="pinterest">
                    <i class="bi bi-youtube"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" target="_blank" title="vimeo">
                    <i class="bi bi-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
        <hr class="p-0 m-0 b-0" />

        <div class="bg-dark py-2">
          <div class="container text-center">
            <p class="mb-0 py-2 text-white">
              &copy; 2022 BBBootstrap All risghts reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default footer;
