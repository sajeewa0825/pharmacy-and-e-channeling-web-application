import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-white">
        <div class="container">
          <div className="col-12">
            <form class="d-flex justify-content-end">
              <div className="d-flex">
                <input
                  class="form-control me-2 inputSearch"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn SearchButton" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
