import React from "react";
import { NavbarWrapper } from "./style";

const Navbar = () => {
  return (
    <NavbarWrapper>
      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg fixed">
        <div className="container-fluid justify-content-between">
          <div className="d-flex">
            {window.location.pathname == "/user-management" ||
            window.location.pathname == "/roboot-management" ? (
              null
            ) : <form className="input-group w-auto my-auto d-none d-sm-flex search">
            <div className="searchIcon">
              <img src="/assets/images/sidebar/search.svg" />
            </div>
            <input
              autoComplete="off"
              type="search"
              className="form-control rounded searchField"
              placeholder="Search"
              style={{ minWidth: "361px" }}
            />
          </form>}
          </div>

          <ul className="navbar-nav flex-row right-items">
            <div className="localization">
              <span>EN</span>
              <img
                src="/assets/images/sidebar/arrow-dropdown-gray.svg"
                className="arrow-dropdown-gray"
              />
            </div>
            <li className="nav-item me-3 me-lg-1">
              <a
                className="profile nav-link d-sm-flex align-items-sm-center"
                href="#"
              >
                <div className="profileInitial">JD</div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" height={22} alt="Black and White Portrait of a Man" loading="lazy" /> */}
                <div>
                  <span className="userName">John Doe</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navbar */}
    </NavbarWrapper>
  );
};

export default Navbar;
