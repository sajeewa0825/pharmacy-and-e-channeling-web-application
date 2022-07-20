import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Products/FeaturesProducts.css";

const FeatureProduct = () => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const [Product, SetProduct] = useState([]);

  useEffect(() => {
    const getproduct = () => {
      axios
        .get("http://Localhost:8080/addproduct")
        .then((res) => {
          console.log(res.data);
          SetProduct(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    };
    getproduct();
  }, []);

  let ProductData = Product.map((data,index) => {
    if (index === 0) {
      console.log(Product)
    
    return (
      <div className="FPSection">
        <h2 class="text-center"> Featurs Products </h2>
        <Slider {...settings}>
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img class="pic-1" src={Product[0].imgLink} />
              </a>
              <span class="product-discount-label">{Product[0].qty}</span>
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
                <a href="#">{Product[0].name}</a>
              </h3>
              <div class="price">
                <span>Rs.1600</span> Rs.{Product[0].price}
              </div>
              <a class="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img class="pic-1" src={Product[1].imgLink} />
              </a>
              <span class="product-discount-label">{Product[1].qty}</span>
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
                <a href="#">{Product[1].name}</a>
              </h3>
              <div class="price">
                <span>Rs. 3600 </span>Rs. {Product[1].price}
              </div>
              <a class="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img class="pic-1" src={Product[2].imgLink} />
              </a>
              <span class="product-discount-label">{Product[2].qty}</span>
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
                <a href="#">{Product[2].name}</a>
              </h3>
              <div class="price">
                <span>Rs.10000</span> Rs. {Product[2].price}
              </div>
              <a class="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img class="pic-1" src={Product[3].imgLink} />
              </a>
              <span class="product-discount-label">{Product[3].qty}</span>
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
                <a href="#">{Product[3].name}</a>
              </h3>
              <div class="price">
                <span>Rs.1600</span> Rs.{Product[3].price}
              </div>
              <a class="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
          <div class="product-grid">
            <div class="product-image">
              <a href="#" class="image">
                <img class="pic-1" src={Product[2].imgLink} />
              </a>
              <span class="product-discount-label">{Product[2].qty}</span>
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
                <a href="#">{Product[2].name}</a>
              </h3>
              <div class="price">
                <span>Rs.10000</span> Rs. {Product[2].price}
              </div>
              <a class="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
          
        </Slider>
      </div>
    )}
  })
  return (
    <div className="FPSection">
        {ProductData}
    </div>
  );
};

export default FeatureProduct;
