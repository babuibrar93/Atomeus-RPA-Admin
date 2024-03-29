import { styled } from "styled-components";

export const SidebarWrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 272px;
    background: #212036;
    z-index: 100;
    transition: all 0.3s ease;
  }

  .handBurger {
    display: flex;
    justify-content: space-between;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 14px 24px;
    .menu {
      display: block;
      height: fit-content;
      cursor: pointer;
      div {
        width: 25px;
        height: 2px;
        background-color: white;
        margin: 6px 0;
      }
    }
  }
  .close {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 70px;
    background: #212036;
    z-index: 100;
    transition: all 0.5s ease;

    /* .nav-links {
      display: none;
    } */
  }
  .logo-details {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }
  .logo-details i {
    font-size: 30px;
    color: #fff;
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
  }
  /* .logo-details .logo_name {
    margin-top: 10px;
  } */
  .logo-details .logo_name {
    transition-delay: 0s;
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 0 150px 0;
    overflow: auto;
    // margin: 30px;
    gap: 10px;
  }

  .sidebar-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 24px;
    cursor: pointer;
  }

  .sidebar-items-clicked {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 24px;
    cursor: pointer;
    background: linear-gradient(
      90.11deg,
      rgba(48, 139, 173, 0.12) -0.27%,
      rgba(90, 164, 192, 0.24) 89.19%
    );
    color: white;

    .sidebar-items-clicked .sidebar-images {
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }
  }

  .sidebar-items:hover {
    background: linear-gradient(
      90.11deg,
      rgba(48, 139, 173, 0.12) -0.27%,
      rgba(90, 164, 192, 0.24) 89.19%
    );
  }

  .sidebar .nav-links .items {
    display: flex;
    gap: 5px;
  }

  .sidebar .nav-links .items .sidebar-images {
    width: 18px;
    height: 18px;
  }

  .sidebar .nav-links .items .sidebar-images-clicked {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
  }

  .sidebar.close .nav-links {
    overflow: visible;
  }
  .sidebar .nav-links::-webkit-scrollbar {
    display: none;
  }
  .sidebar .nav-links li {
    position: relative;
    list-style: none;
    transition: all 0.4s ease;
  }

  .sidebar .nav-links li .iocn-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sidebar.close .nav-links li .iocn-link {
    display: block;
  }
  .sidebar .nav-links li i {
    height: 50px;
    min-width: 78px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .sidebar .nav-links li.showMenu i.arrow {
    transform: rotate(-180deg);
  }
  .sidebar.close .nav-links i.arrow {
    display: none;
  }
  .sidebar .nav-links li a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .sidebar .nav-links li a .link_name {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #99a2ac;
    transition: all 0.4s ease;
    white-space: nowrap;
  }

  .sidebar .nav-links li a .link_name-clicked {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #f4f6f8;
    transition: all 0.4s ease;
  }

  .sidebar .nav-links li a .link_name:hover {
    color: #f4f6f8;
  }

  .sidebar.close .nav-links li a .link_name {
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li .sub-menu {
    padding: 6px 6px 14px 80px;
    margin-top: -10px;
    background: #1d1b31;
    display: none;
  }
  .sidebar .nav-links li.showMenu .sub-menu {
    display: block;
  }
  .sidebar .nav-links li .sub-menu a {
    color: #fff;
    font-size: 15px;
    padding: 5px 0;
    white-space: nowrap;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .sidebar .nav-links li .sub-menu a:hover {
    opacity: 1;
  }
  .sidebar.close .nav-links li .sub-menu {
    position: absolute;
    left: 100%;
    top: -10px;
    margin-top: 0;
    padding: 10px 20px;
    border-radius: 0 6px 6px 0;
    opacity: 0;
    display: block;
    pointer-events: none;
    transition: 0s;
  }
  .sidebar.close .nav-links li:hover .sub-menu {
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
  }
  .sidebar .nav-links li .sub-menu .link_name {
    display: none;
  }
  .sidebar.close .nav-links li .sub-menu .link_name {
    font-size: 18px;
    opacity: 1;
    display: block;
  }
  .sidebar .nav-links li .sub-menu.blank {
    opacity: 1;
    pointer-events: auto;
    padding: 3px 20px 6px 16px;
    opacity: 0;
    pointer-events: none;
  }
  .sidebar .nav-links li:hover .sub-menu.blank {
    top: 50%;
    transform: translateY(-50%);
  }
  .sidebar .profile-details {
    position: fixed;
    bottom: 0;
    width: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1d1b31;
    padding: 12px 0;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details {
    background: none;
  }
  .sidebar.close .profile-details {
    width: 78px;
  }
  .sidebar .profile-details .profile-content {
    display: flex;
    align-items: center;
  }
  .sidebar .profile-details img {
    height: 52px;
    width: 52px;
    object-fit: cover;
    border-radius: 16px;
    margin: 0 14px 0 12px;
    background: #1d1b31;
    transition: all 0.5s ease;
  }
  .sidebar.close .profile-details img {
    padding: 10px;
  }
  .sidebar .profile-details .profile_name,
  .sidebar .profile-details .job {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
  }
  .sidebar.close .profile-details i,
  .sidebar.close .profile-details .profile_name,
  .sidebar.close .profile-details .job {
    display: none;
  }
  .sidebar .profile-details .job {
    font-size: 12px;
  }
  .home-section {
    position: relative;
    background: #e4e9f7;
    height: 100vh;
    left: 260px;
    width: calc(100% - 260px);
    transition: all 0.5s ease;
  }
  .sidebar.close ~ .home-section {
    left: 78px;
    width: calc(100% - 78px);
  }
  .home-section .home-content {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .home-section .home-content .bx-menu,
  .home-section .home-content .text {
    color: #11101d;
    font-size: 35px;
  }
  .home-section .home-content .bx-menu {
    margin: 0 15px;
    cursor: pointer;
  }
  .home-section .home-content .text {
    font-size: 26px;
    font-weight: 600;
  }

  /* @media (max-width: 1200px) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      height: 1px;
      width: 1px;
      background: #212036;
      z-index: 100;
      transition: all 0.5s ease;
    }
    .handBurger {
      .menu {
        display: block;
        padding: 10px;
      }
    }
    .logo-details {
      display: none;
    }
  } */
`;
