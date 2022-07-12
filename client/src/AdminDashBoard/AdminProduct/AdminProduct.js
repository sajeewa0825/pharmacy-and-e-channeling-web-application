import axios from "axios";
import React, { useState, useEffect } from 'react'


const AdminProduct = () => {
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

  const productlist = Product.map((data) => {
    return (
      <tr>
      <td>{data._id}</td>
      <td>{data.name}</td>
      <td>{data.qty}</td>
      <td>{data.imgLink}</td>
      <td>
        <i class="bi bi-pen-fill Pen_icon_table me-3 text-primary"></i>
        <i class="bi bi-trash text-danger"></i>
      </td>
    </tr>

    )})
  return (
    <div>
      <div className="container">
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
                    ></button>
                  </div>
                  <div class="modal-body ">
                    <form class="row g-3">
                      <div class="col-md-6">
                        <label for="inputP_Name" class="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputP_Name"
                        />
                      </div>
                      <div class="col-md-6">
                        <label for="inputQTY" class="form-label">
                          QTY
                        </label>
                        <input type="text" class="form-control" id="inputQTY" />
                      </div>

                      <div class="col-md-6">
                        <label for="inputImg" class="form-label">
                          Image Link
                        </label>
                        <input type="text" class="form-control" id="inputImg" />
                      </div>

                      <div class="col-12">
                        <button
                          type="submit"
                          class="AdminDoctor_modal_Submit_Btn"
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
                      <th scope="col">Image</th>

                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {productlist}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
