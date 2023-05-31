import React, { useState } from "react";
import { SidebarWrapper } from "./style";
import { sidebarData } from ".";
import { useNavigate } from "react-router-dom";

const Sidebar = ({action}) => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);

  const handleSidebar = (arg) => {
    setClose(!arg);
    action(!arg)
  };

  return (
    <SidebarWrapper>
      <div className="sidebar">
        <div className="handBurger">
          <div className="menu" onClick={() => handleSidebar(close)}>
            {close ? <img height="20px" width="20px"
                  src="/assets/images/modal/cross.svg"
                  className="crossIcon"
                /> : <><div></div>
                <div></div>
                <div></div></>}
            
          </div>
        </div>
        <div className="logo-details">
          <span className="logo_name">
            <img src="/assets/images/sidebar/logoImg.png" height="60px" />
          </span>
        </div>
        <ul className="nav-links">
          {sidebarData?.map((data, index) => (
            <div
              key={index}
              className={
                window.location.pathname == data.path
                  ? "sidebar-items-clicked"
                  : "sidebar-items"
              }
              onClick={() => {
                navigate(data.path);
              }}
            >
              <li>
                <a href="#">
                  <div className="items">
                    <img
                      src={data.icon}
                      className={
                        window.location.pathname == data.path
                          ? "sidebar-images-clicked"
                          : "sidebar-images"
                      }
                    />
                    <span
                      className={
                        window.location.pathname == data.path
                          ? "link_name-clicked"
                          : "link_name"
                      }
                    >
                      {data.item}
                    </span>
                  </div>
                </a>
              </li>
            </div>
          ))}
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
