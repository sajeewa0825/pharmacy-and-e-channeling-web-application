import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shop.css";
// import SideMenu from "./SideBar/SideMenu";
import Logo from "../NavBar/image/Group 4.svg"
import "../NavBar/nav.css";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { CartData } from '../../actions/CartActions';
import "./SideMenu.css";

const Shop = (props) => {
  const [Product, SetProduct] = useState([])
  const [item, Setitem] = useState([props.CartItems])


  useEffect(() => {
    
    const getproduct = () => {
      axios.get("https://web-production-2bee.up.railway.app/addproduct").then((res) => {
        console.log(res.data)
        SetProduct(res.data)
      }).catch((err) => {
        alert(err)
      })
    }

    getproduct();
  }, [])

  const [Items, SetItems] = useState([])
  const [count, Setcount] = useState(item[0].length)
  const [pname, Setpname] = useState("")

  const addData = (data)=>{
    props.CartData(data)
    Setcount(parseInt(count)+parseInt(1))
  }

  const search = () =>{
    console.log(pname)
    if (pname === "") {
      
    }else{
      const ser =Product.find(obj => {
        return obj.name === pname ;
      });

      if (ser) {
        SetItems([ser])
      }else{
        alert("Name not match")
      }
    }

  }

  console.log(Items)

  const SearchData = Items?.map((data) => {
    console.log(data)
    return (
        <div key={data._id} className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src={data.imgLink} />
              </a>
              <span className="product-discount-label">{data.qty}</span>
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
                <span></span>Rs.{data.price}
              </div>
              <a className="add-to-cart" href="#" onClick={() => addData(data)}>
                add to cart
              </a>
            </div>
          </div>
        </div>
      
    );
  });

  const ProductData = Product.map((data) => {
    return (
        <div key={data._id} className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <a href="#" className="image">
                <img className="pic-1" src={data.imgLink} />
              </a>
              <span className="product-discount-label">{data.qty}</span>
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
                <span></span>Rs.{data.price}
              </div>
              <a className="add-to-cart" href="#" onClick={() => addData(data)}>
                add to cart
              </a>
            </div>
          </div>
        </div>
      
    );
  });

  return (
    <div>
          <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="/phhome">
            <img
              src={Logo}
              alt=""
              className="d-inline-block align-text-center"
            />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to={"/phhome"}
                >
                  <i class="fa fa-home"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phaboutus"}>
                  <i className="fa fa-handshake-o"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/drhome"}>
                  <i class="fa fa-stethoscope"></i>Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/phshop"}>
                  <i className="fa fa-shopping-bag"></i>Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contactUs"}>
                  <i className="fa fa-mobile"></i>Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <Link to={"/cart"}>
              {" "}
              <button
                type="button"
                className=" btn-none position-relative me-1 p-0"
              >
                <i className="bi bi-cart3 fs-4 text-black "></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle CartBadge ">
                {count}<span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
      <div className="container-fluid">
        <nav class="navbar navbar-light bg-white">
          <div class="container-fluid">
            <div className="col-12">
              <form class="d-flex justify-content-end">
                <div className="d-flex">
                  <input
                    class="form-control me-2 inputSearch"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => Setpname(e.target.value)}
                  />
                  <button class="btn SearchButton" type="submit" onClick={ (e) => search(e)}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/*******       Products    ***********/}

      <div className="container-fluid">
        <div className="row">{SearchData}{ProductData}</div>
      </div>
    </div>
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ CartData: CartData }, dispatch)
}

function mapStateToProps(state) {
  return {
    CartItems: state.CartItem.cartItems
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Shop)
