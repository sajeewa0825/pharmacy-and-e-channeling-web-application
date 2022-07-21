import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "../Images/icons8-user-100.png";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const [Product, SetProduct] = useState([]);
  const [name, Setname] = useState("");
  const [imgLink, SetimgLink] = useState("");
  const [price, Setprice] = useState("");
  const [qty, Setqty] = useState("");
  const [info, Setinfo] = useState("");
  const [submit, Setsubmit] = useState("");
  const [user_id, Setuser_id] = useState("");

  useEffect(() => {
    const getproduct = () => {
      const admin = localStorage.getItem("admintoken");
      const data = {
        token: admin,
      };
      axios
        .post("https://medisuite.herokuapp.com/adminverify", data)
        .then((res) => {
          if (res.data.status === 200) {
            console.log("admin verfiy");
          } else {
            localStorage.clear();
            window.location.href = "/signin";
          }
        })
        .catch((err) => {
          localStorage.clear();
          window.location.href = "/signin";
        });

      axios
        .get("https://medisuite.herokuapp.com/addproduct")
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

  const newproduct = {
    name,
    imgLink,
    price,
    info,
    qty,
  };

  const addproduct = (e) => {
    console.log(newproduct);
    e.preventDefault();
    axios
      .post("https://medisuite.herokuapp.com/addproduct", newproduct)
      .then((res) => {
        document.getElementById("form").reset();
        document.getElementById("closebutton").click();
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteproduct = (id) => {
    axios
      .delete(`https://medisuite.herokuapp.com/deleteproduct/${id}`)
      .then((res) => {
        alert("Appointment deleted");
        SetProduct(Product.filter((data) => data._id !== id));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const updateproduct = (data) => {
    document.getElementById("openbtn").click();
    Setsubmit("UPDATE");
    Setname(data.name);
    SetimgLink(data.imgLink);
    Setprice(data.price);
    Setinfo(data.info);
    Setqty(data.qty);
    Setuser_id(data._id);
  };

  const productupdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://medisuite.herokuapp.com/productupdate/${user_id}`, newproduct)
      .then((res) => {
        Setuser_id("");
        Setsubmit("");
        document.getElementById("form").reset();
        document.getElementById("closebutton").click();
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const controlsubmit = (e) => {
    if (submit === "UPDATE") {
      productupdate(e);
    } else {
      addproduct(e);
    }
  };

  const productlist = Product.map((data) => {
    return (
      <tr key={data._id}>
        <td>{data._id}</td>
        <td>{data.name}</td>
        <td>{data.qty}</td>
        <td>{data.price}</td>
        <td>{data.info}</td>
        <td>{data.imgLink}</td>
        <td>
          <i
            class="bi bi-pen-fill Pen_icon_table me-3 text-primary"
            onClick={(e) => updateproduct(data)}
          ></i>
          <i
            class="bi bi-trash text-danger"
            onClick={(e) => deleteproduct(data._id)}
          ></i>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 adminLeft_col" id="style-3">
            <div className="sidemenu_top">
              <div className="sidemenu_top_User_img">
                <span>MEDISUITE</span>
                <hr />
                <img src={User} alt="img" />
                <span>Admin</span>
              </div>
            </div>
            <div className="sidemenu_center">
              <ul className="sidemenu_center_ul">
                <li>
                  <Link to={"/admin"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-columns-gap"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link to={"/adminDoctor"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-heart-pulse"></i>
                    <span>Doctor</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminPatient"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-people"></i>
                    <span>Patient</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminAppoinment"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-card-heading"></i>
                    <span>Appoinments</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/adminProduct"}
                    className="sidemenu_center_ul_Link"
                  >
                    <i class="bi bi-bag-plus"></i>
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link to={"./#"} className="sidemenu_center_ul_Link">
                    <i class="bi bi-box-arrow-left"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 adminRight_col " id="style-3">
            <div className="row p-3 adminDoc_top_row">
              <div className="col">
                <h4>PRODUCTS LIST</h4>
              </div>
              <div className="col d-flex justify-content-end">
                <button
                  type="button"
                  class="AdminDoctor_AddDoc_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  id="openbtn"
                >
                  <i class="bi bi-plus-circle"></i>Add Product
                </button>

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable ">
                    <div class="modal-content border-0 ">
                      <div class="modal-header AdminDoctor_modal_Head shadow">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          ADD PRODUCTS
                        </h5>
                        <button
                          type="button"
                          class="btn-close AdminDoctor_modal_Head_Btn"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          id="closebutton"
                        ></button>
                      </div>
                      <div class="modal-body ">
                        <form class="row g-3 " id="form">
                          <div class="col-md-6">
                            <label for="inputP_Name" class="form-label">
                              Product Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputP_Name"
                              onChange={(e) => {
                                Setname(e.target.value);
                              }}
                              value={name}
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="inputQTY" class="form-label">
                              QTY
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputQTY"
                              onChange={(e) => {
                                Setqty(e.target.value);
                              }}
                              value={qty}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputImg" class="form-label">
                              Image Link
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputImg"
                              onChange={(e) => {
                                SetimgLink(e.target.value);
                              }}
                              value={imgLink}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputImg" class="form-label">
                              info
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputImg"
                              onChange={(e) => {
                                Setinfo(e.target.value);
                              }}
                              value={info}
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputImg" class="form-label">
                              price
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputImg"
                              onChange={(e) => {
                                Setprice(e.target.value);
                              }}
                              value={price}
                            />
                          </div>

                          <div class="col-12">
                            <button
                              type="submit"
                              class="AdminDoctor_modal_Submit_Btn"
                              onClick={(e) => controlsubmit(e)}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12 p-3">
                <div class="card ">
                  <div class="card-body table-responsive pe-4">
                    <table class="table table-hover  adminHome_Appoinment-Table ">
                      <thead className="adminHome_Appoinment-TableHead">
                        <tr>
                          <th scope="col">Product_Id</th>
                          <th scope="col">Product_name</th>
                          <th scope="col">QTY</th>
                          <th scope="col">price</th>
                          <th scope="col">Info</th>
                          <th scope="col">Image</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>{productlist}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
