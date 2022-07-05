import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
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
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Order Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Got it
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Not
                                </label>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Got it
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                  checked
                                />
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Not
                                </label>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="modal-footer border-0">
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
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
                <i class="text-primary font-weight-bold">3</i> items in your
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
                  <tr>
                    <td data-th="Product">
                      <div class="row">
                        <div class="col-md-3 text-left">
                          <img
                            src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                            alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow "
                          />
                        </div>
                        <div class="col-md-9 text-left mt-sm-2">
                          <h4>Product Name</h4>
                          <p class="font-weight-light">Brand &amp; Name</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$49.00</td>
                    <td data-th="Quantity">
                      <input
                        type="number"
                        class="form-control form-control-lg text-center"
                        value="1"
                      />
                    </td>
                    <td class="actions" data-th="">
                      <div class="text-right">
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-sync text-primary"></i>
                        </button>
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-trash text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-th="Product">
                      <div class="row">
                        <div class="col-md-3 text-left">
                          <img
                            src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                            alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow "
                          />
                        </div>
                        <div class="col-md-9 text-left mt-sm-2">
                          <h4>Product Name</h4>
                          <p class="font-weight-light">Brand &amp; Name</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$49.00</td>
                    <td data-th="Quantity">
                      <input
                        type="number"
                        class="form-control form-control-lg text-center"
                        value="1"
                      />
                    </td>
                    <td class="actions" data-th="">
                      <div class="text-right">
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-sync text-primary"></i>
                        </button>
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-trash text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-th="Product">
                      <div class="row">
                        <div class="col-md-3 text-left">
                          <img
                            src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                            alt=""
                            class="img-fluid d-none d-md-block rounded mb-2 shadow "
                          />
                        </div>
                        <div class="col-md-9 text-left mt-sm-2">
                          <h4>Product Name</h4>
                          <p class="font-weight-light">Brand &amp; Name</p>
                        </div>
                      </div>
                    </td>
                    <td data-th="Price">$49.00</td>
                    <td data-th="Quantity">
                      <input
                        type="number"
                        class="form-control form-control-lg text-center"
                        value="1"
                      />
                    </td>
                    <td class="actions" data-th="">
                      <div class="text-right">
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-sync text-primary"></i>
                        </button>
                        <button class="btn btn-white border-secondary bg-white btn-md mb-2">
                          <i class="fas fa-trash text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="float-right text-right">
                <h4>Subtotal:</h4>
                <h1>$99.00</h1>
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
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row g-3">
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Name"
                            aria-label="First name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Mobile number"
                            aria-label="Mobile number"
                          />
                        </div>
                        <div class="col-md-12">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            aria-label="Address"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
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

export default Cart;
