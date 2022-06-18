import React from "react";
import "./shop.css";
import img1 from "./images/easy-wear-adult-diaper-m-10-s.jpg";
import SideMenu from "./SideBar/SideMenu";

const shop = () => {
  return (
    <div>
      <div className="container-fluid">
        <SideMenu />
      </div>
      {/*******       Products    ***********/}
      <div className="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={img1} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="far fa-star"></li>
                  <li class="far fa-star"></li>
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={img1} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="far fa-star"></li>
                  <li class="far fa-star"></li>
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={img1} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="far fa-star"></li>
                  <li class="far fa-star"></li>
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={img1} />
                </a>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="fas fa-star"></li>
                  <li class="far fa-star"></li>
                </ul>
                <h3 class="title">
                  <a href="#">Women's Shirt</a>
                </h3>
                <div class="price">$79.90</div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shop;
