import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-white">
        <div class="container">
          <div className="col-12">
            <form class="d-flex justify-content-around">
              <div className="d-flex catagoryCanvas">
                <button
                  class="btn IconButton me-1 p-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i class="bi bi-hdd-rack"></i>
                </button>
                <h5 className="ButtonText">Catagory</h5>
              </div>
              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Backdrop with scrolling
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <p>
                    Try scrolling the rest of the page to see this option in
                    action.
                  </p>
                </div>
              </div>
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
