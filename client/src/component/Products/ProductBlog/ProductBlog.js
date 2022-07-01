import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./ProductBlog.css";

const ProductBlog = () => {
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

  const ProductData = Product.map((data, index) => {
    if (index < 3) {
      return (
        <div key={data._id}>
          <div class="col-lg-8 mx-auto pt-4">
            {/* <!-- List group--> */}
            <ul class="list-group shadow">
              {/* <!-- list group item--> */}
              <li class="list-group-item">
                {/* <!-- Custom content--> */}
                <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                  <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">{data.name}</h5>
                    <p class="font-italic text-muted mb-0 small">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Suscipit fuga autem maiores necessitatibus.
                    </p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                      <h6 class="font-weight-bold my-2">{data.price}</h6>
                      <ul class="list-inline small">
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star UlIcon"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star UlIcon"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star UlIcon"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star UlIcon"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star-o text-gray"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src={data.imgLink}
                    alt="Generic placeholder image"
                    width="200"
                    class="ml-lg-5 order-1 order-lg-2"
                  />
                </div>
                {/* <!-- End --> */}
              </li>
              {/* <!-- End --> */}
            </ul>
          </div>
        </div>
      )
    }
  })
  return (
    <div class="container">
      <h1>Product</h1>
      <div class="row ">
        {ProductData}
      </div>
    </div>
  );
};

export default ProductBlog;
