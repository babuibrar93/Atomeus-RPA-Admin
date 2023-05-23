import React, { useState } from "react";
import { SidebarWrapper } from "./style";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <SidebarWrapper>
      <div className={open ? "sidebar" : "sidebar close"}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">
            <img src="/assets/images/sidebar/logo.svg" />
          </span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <div className="items">
                <img src="/assets/images/sidebar/dashboard.svg" className="sidebar-images" />
                <span className="link_name">Dashboard</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="items">
                <img src="/assets/images/sidebar/user.svg" className="sidebar-images" />
                <span className="link_name">User Management</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="items">
                <img src="/assets/images/sidebar/roboot.svg" className="sidebar-images" />
                <span className="link_name">Robot Management</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="items">
                <img src="/assets/images/sidebar/manual.svg" className="sidebar-images" />
                <span className="link_name">Manuals</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="items">
                <img src="/assets/images/sidebar/support.svg" className="sidebar-images" />

                <span className="link_name">Support</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* <section className="">
        <div className="home-content">
          <h6 onClick={(previous) => setOpen(!previous)}>OK</h6>
        </div>
      </section> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
