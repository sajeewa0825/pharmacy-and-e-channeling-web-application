import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Products/FeaturesProducts.css";
import img1 from "./A4.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="FPSection">
        <h2 class="text-center"> Featurs Products </h2>
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}
