import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./shop.css";
import SideMenu from "./SideBar/SideMenu";
import NavBar from "../NavBar/nav";

const Shop = () => {
  const [Product, SetProduct] = useState([])

  useEffect(() => {
    const getdoctor = () => {
      axios.get("http://Localhost:8080/addproduct").then((res) => {
        console.log(res.data)
        SetProduct(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    getdoctor();
  }, [])


  let ProductData = Product.map((data) => {
    return (
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src={data.imgLink} />
              </a>
              <span className="product-discount-label">-33%</span>
              <ul className="product-links">
                <li>
                  <a href="#" data-tip="Add to Wishlist">
                    <i className="fa fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Compare">
                    <i className="fa fa-random"></i>
                  </a>
                </li>
                <li>
                  <a href="#" data-tip="Quick View">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="product-content">
              <ul className="rating">
                <li className="fas fa-star"></li>
                <li className="fas fa-star"></li>
                <li className="fas fa-star"></li>
                <li className="far fa-star"></li>
                <li className="far fa-star"></li>
              </ul>
              <h3 className="title">
                <a href="#">{data.name}</a>
              </h3>
              <div className="price">
                <span>$90.00</span> {data.price}
              </div>
              <a className="add-to-cart" href="#">
                add to cart
              </a>
            </div>
          </div>
        </div>
    )
  })

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <SideMenu />
      </div>
      {/*******       Products    ***********/}

      <div className="container-fluid">
        <div className="row" >
            {ProductData}
        </div>
      </div>

    </div >
  );
};

export default Shop;
