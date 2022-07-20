import React, { useState,useEffect } from 'react'
import "./Cart.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';
import { removeFromCart } from '../../../actions/CartActions';
import { bindActionCreators } from 'redux';

const Cart = (props) => {
  useEffect(() => {
    const getdata = () => {

      const admin =localStorage.getItem('token')
      const data ={
        token :admin
      }
      axios.post("http://Localhost:8080/adminverify",data).then((res) => {
          if(res.data.status === 200){
              console.log("admin verfiy")
          }else{
            localStorage.clear();
            window.location.href = '/signin'
          }
      }).catch((err) => {
        localStorage.clear();
        window.location.href = '/signin'
      })
    }

    getdata();
  },[])

  console.log(props.CartItems)
  const [item, Setitem] = useState(props.CartItems)
  const [name, Setname] = useState("")
  const [address, Setaddres] = useState("")
  const [phone, Setphone] = useState("")

  let total = 0;
  console.log(item)
  for (let index = 0; index < item.length; index++) {
    total = parseInt(total) + parseInt(item[index].price) * parseInt(item[index].qty)
  }
  const [bill, Setbill] = useState(total)





  const billcal = (data, co) => {
    let temp = 0;
    for (let index = 0; index < item.length; index++) {
      if (co > -1) {
        if (item[index]._id === data._id) {
          item[index].qty = co
        }
      }

      temp = parseInt(temp) + parseInt(item[index].price) * parseInt(item[index].qty)
    }
    Setbill(temp)

  }

  const removeitem = (id) => {
    const filtered = item.filter(obj => {
      return obj._id !== id;
    });
    Setitem(filtered)

    props.removeFromCart(id)

    if (filtered) {
      let temp1 = 0;
      for (let index = 0; index < filtered.length; index++) {
        temp1 = parseInt(temp1) + parseInt(filtered[index].price) * parseInt(filtered[index].qty)
      }
      Setbill(temp1)
    } else {
      Setbill(0)
    }

  };


  const senddata = {
    name,
    address,
    phone,
    item,
    bill,
    user: localStorage.token,
    status: "pending"
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/buyitem", senddata).then((res) => {
      console.log(res.data.status)

      if (res.data.status === 500) {
        alert("Something went to Wrong Plase Relogin Account")
      } else {

        for (let index = 0; index < item.length; index++) {
          axios.get(`http://localhost:8080/productqtyfind/${item[index]._id}`).then((res) => {
            console.log(res.data[0].qty)
              const data={
                qty:parseInt(res.data[0].qty)- parseInt(item[index].qty)
              }
              console.log(data)
            axios.put(`http://localhost:8080/productqtyupdated/${item[index]._id}`,data).then((res) => {
              console.log(res)
            }).catch((err) => {
              alert(err)
            })

          }).catch((err) => {
            alert(err)
          })
          
        }

        document.getElementById('closebutton').click();
        window.location.href = '/cart'
      }

    }).catch((err) => {
      alert(err)
    })
  }


  const [Pendingitem, SetPendingitem] = useState([])

  const orderconfrom = (e) => {

    e.preventDefault();
    axios.get("http://Localhost:8080/buyitem", {
      params: {
        token: localStorage.getItem("token")
      }
    }).then((res) => {
      SetPendingitem(res.data)
    }).catch((err) => {
      alert(err)
    })

  }

  const [status, Setstatus] = useState(false)

  const updatedata= {
    status:"received"
  }
  const orderUpdate = (e, Id) => {
    e.preventDefault();
    console.log(status)

    if (status) {
      axios.put(`http://localhost:8080/buyitem/${Id}`, updatedata).then((res) => {
        alert("Updated")
        Setstatus(false)
      }).catch((err) => {
        alert(err)
      })
    }

  }

  const ordermap = Pendingitem.map((data) => {
    console.log(Pendingitem)
    return (
      <tbody key={data._id}>
        <tr>
          <th scope="row">{data._id}</th>
          {data.item.map((item) => <ul><td key={item._id}>{item.name}-{item.qty}</td></ul>)}
          <td>{data.date}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={(e) => Setstatus(e.target.checked)}
              />
              <label
                class="form-check-label"
                for="flexSwitchCheckDefault"
              >
                (Not/Get)
              </label>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-primary" onClick={(e) => orderUpdate(e, data._id)}>
              confrom
            </button>
          </td>
        </tr>
      </tbody>
    )
  })


  const CartItem = item.map((data) => {
    return (
      <tr key={data._id}>
        <td data-th="Product">
          <div class="row">
            <div class="col-md-3 text-left">
              <img
                src={data.imgLink}
                alt=""
                class="img-fluid d-none d-md-block rounded mb-2 shadow "
              />
            </div>
            <div class="col-md-9 text-left mt-sm-2">
              <h4>{data.name}</h4>
              <p class="font-weight-light">{data.info}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">Rs.{data.price}</td>
        <td data-th="Quantity">
          <input
            type="number"
            class="form-control form-control-lg text-center"
            defaultValue={1}
            onChange={(e) => { billcal(data, e.target.value) }}
          />
        </td>
        <td class="actions" data-th="">
          <div class="text-right">
            <button class="btn btn-white border-secondary bg-white btn-md mb-2" onClick={() => removeitem(data._id)}>
              <i class="fas fa-trash text-danger"></i>
            </button>
          </div>
        </td>
      </tr>

    )
  })

  return (
    <div>
      <section class="pt-3 pb-3">
        <div class="container">
          <div className="row d-flex justify-content-end">
            <div className="col-sm-2">
              <button
                type="button"
                class=" summeryBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={(e) => orderconfrom(e)}
              >
                <i class="bi bi-card-list"></i>Summery
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        YOUR ALL ODERS
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Item</th>
                            <th scope="col">Date</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Order Status</th>
                          </tr>
                        </thead>
                        {ordermap}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row w-100">
            <div class="col-lg-12 col-md-12 col-12">
              <h3 class="display-5 mb-2 text-center">SHOPPING CART</h3>
              <p class="mb-5 text-center">
                <i class="text-primary font-weight-bold">{item.length}</i> items in your
                cart
              </p>
              <table
                id="shoppingCart"
                class="table table-condensed table-responsive"
              >
                <thead>
                  <tr>
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th style={{ width: "16%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {CartItem}
                </tbody>
              </table>
              <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>${bill}</h1>
              </div>
            </div>
          </div>
          <div class="row mt-4 d-flex align-items-center">
            <div class="col-sm-6 order-md-2 text-right">
              <button
                type="button"
                class=" btn btn-primary mb-4 btn-lg pl-5 pr-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal_1"
              >
                Checkout
              </button>

              <div
                class="modal fade"
                id="exampleModal_1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        ADD YOUR DELIVERY DTAILS
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id='closebutton'
                      ></button>
                    </div>
                    <div class="modal-body" >
                      <div class="row g-3">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            aria-label="First name"
                            onChange={(e) => { Setname(e.target.value) }}
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mobile number"
                            aria-label="Mobile number"
                            onChange={(e) => { Setphone(e.target.value) }}
                          />
                        </div>
                        <div class="col-md-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            aria-label="Address"
                            onChange={(e) => { Setaddres(e.target.value) }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" onClick={(e) => submitHandler(e)}>
                        Confirm Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
              <Link className="Cart_Link" to={"/phshop"}>
                <i class="fas fa-arrow-left mr-2 text-primary"></i> Continue
                Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    CartItems: state.CartItem.cartItems
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart: removeFromCart }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart)