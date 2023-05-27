import { styled } from "styled-components";

export const TableWrapper = styled.div`
  .btn-group .btn {
    transition: background-color 0.3s ease;
  }
  .moreIcon {
    position: relative;
  }
  .main {
    .moreVert {
      position: absolute;
      right: 0;
      top: 24rem;
    }
  }

  .panel-table .panel-body {
    padding: 0;
  }

  .table > thead > tr > th {
    border-bottom: none;
    color: #f4f6f8;
  }

  .panel-footer,
  .panel-table .panel-body .table-bordered {
    border-style: none;
    margin: 0;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
    text-align: center;
    width: 50px;
    color: #f4f6f8;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th.col-tools {
    text-align: center;
    width: 120px;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
  .panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
    border-right: 0;
    color: #f4f6f8;
  }

  .panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
  .panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
    border-left: 0;
    color: #f4f6f8;
  }

  .panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td {
    border-bottom: 0;
    color: #f4f6f8;
  }

  .panel-table .panel-body .table-bordered > thead > tr:first-of-type > th {
    border-top: 0;
    color: #f4f6f8;
  }

  .pagination > li > a,
  .pagination > li > span {
    border-radius: 50% !important;
    margin: 0 5px;
    color: #f4f6f8;
  }

  .pagination {
    margin: 0;
    color: #f4f6f8;
  }

  .containerDiv {
    padding: 36px 24px 128px 24px;
  }

  .mainDiv {
    display: flex;
    flex-direction: column;
    border: 1px solid #99a2ac;
    box-shadow: 0px 3px 35px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow: auto;
    padding-bottom: 10px;

    .bottomDiv {
      .status {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .tableRows {
        font-weight: 400;
        font-size: 14px;
        line-height: 145%;
        color: #e0e0e0;
      }

      //       input[type="checkbox"] { /* change "blue" browser chrome to yellow */
      //   filter: invert(100%) hue-rotate(18deg) brightness(1.7);
      //   // background: #3b3e4e;

      // }

      // .checkthis {
      //   box-sizing: border-box;
      //   width: 16px;
      //   height: 16px;
      //   // background: #3b3e4e;
      //   border: 1px solid #545766;
      //   border-radius: 4px;
      //   accent-color: #3b3e4e;
      // }
    }

    .topDiv {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // justify-content: center;
      .rightPart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 16px;
        gap: 33px;
        span {
          font-weight: 500;
          font-size: 20px;
          line-height: 140%;
          color: #f4f6f8;
        }

        .search {
          position: relative;
          // margin-left: 17.5rem;
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

        .add-btn {
          align-items: center;
          display: flex;
          gap: 13px;
          background: #086a8f;
          border: 1px solid #338bc2;
          box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
          border-radius: 50px;
          padding: 10px 24px;
          color: #ffffff;
          width: fit-content;

          img {
            height: 14px;
            width: 14px;
          }

          span {
            font-size: 14px;
            line-height: 20px;
            /* identical to box height, or 143% */

            /* Colors/White2 */
            color: #f4f6f8;
          }
        }
      }
    }
  }

  .table > :not(caption) > * > * {
    color: #e0e0e0 !important;
    padding: 0.8rem !important;
    box-shadow: none !important;
    border-bottom: 2px solid #2d303e !important;
  }

  .table > thead > tr > th {
    border-top: none !important;
    background: #2d303e;
  }

  .actions {
    display: flex;
    justify-content: space-evenly;
    gap: 14px;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 16px;
    width: 100%;
    height: 68px;
    border-radius: 10px;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 34px;

    .numbering {
      display: flex;
      gap: 29.5px;

      button:nth-child(1) {
        background: #086a8f;
        width: 40px;
        height: 40px;
      }
      button {
        background: none;
        border-radius: 8px;
        padding: 4px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #99a2ac;
      }
    }

    .previousNext {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 14px;
      gap: 8px;
      color: #99a2ac;
      background: #212036;
      border: 1px solid #d0d5dd;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }
  }
`;
