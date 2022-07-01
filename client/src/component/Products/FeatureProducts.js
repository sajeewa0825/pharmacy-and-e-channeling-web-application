import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Products/FeaturesProducts.css";
import { data } from 'jquery';

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

  const [Product, SetProduct] = useState([])

  useEffect(() => {
    const getproduct = () => {
      axios.get("http://Localhost:8080/addproduct").then((res) => {
        console.log(res.data)
        SetProduct(res.data)
      }).catch((err) => {
        alert(err)
      })
    }
    getproduct();
  }, [])

  let ProductData = Product.map((data) => {
    return (
      <div>
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">{data.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="FPSection">
      <h2 class="text-center"> Featurs Products </h2>
      <Slider {...settings}>
            {ProductData}
      </Slider>
    </div>
  );
}

export default FeatureProduct;
