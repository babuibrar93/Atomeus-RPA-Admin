import { styled } from "styled-components";

export const NavbarWrapper = styled.div`
  //   display: grid;
  //   grid-template-columns: 1169px calc(100% - 1169px);
  // float: right;

  .navbar-expand-lg {
    background: #212036;
    position: fixed;
    width: 100%;
    z-index: 11;
  }

  .profile {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .profileInitial {
    width: 40px;
    height: 40px;
    background: #32cdc6;
    border-radius: 50%;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #212036;
  }

  .userName {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: right;
    color: #f4f6f8;
  }

  .search {
    position: relative;
    margin-left: 17.5rem;
  }

  .searchField {
    background: #212036;
    border: 1px solid #99a2ac;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    color: white;
    height: 44px;
    padding-left: 2rem !important;
  }

  .searchIcon {
    position: absolute;
    padding: 0.48rem;
    z-index: 11;
  }

  .right-items {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right-items span {
    color: #99a2ac;
  }

  .arrow-dropdown-gray {
    width: 8px;
    height: 5px;
  }

  .localization {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  @media (max-width: 1200px) {
    .search {
      position: relative;
      margin-left: 5.5rem;
    }
  }

  @media (max-width: 700px) {
    .searchField {
      min-width: 290px !important;
    }
  }
`;
