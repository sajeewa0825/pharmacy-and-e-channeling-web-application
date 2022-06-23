import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center">
            <Link
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              to={"/drhome"}
            >
              Channeling
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Link
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              to={"/Phhome"}
            >
              Pharmacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
