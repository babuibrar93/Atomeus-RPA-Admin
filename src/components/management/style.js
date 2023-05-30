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
    padding: 62px 34px 128px 34px;
  }

  .mainDiv {
    display: flex;
    flex-direction: column;
    border: 1px solid #99a2ac;
    box-shadow: 0px 3px 35px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow: auto;
    padding: 0 19px;

    .bottomDiv {
      .checkbox-wrapper {
        position: relative;
      }

      .checkbox-wrapper input {
        position: absolute;
        left: -99px;
      }
      .checkbox-wrapper input + label {
        cursor: pointer;
        user-select: none;
      }

      .checkbox-wrapper input + label:before {
        content: "";
        position: absolute;
        right: 15px;
        top: 15px;
        width: 16px;
        height: 16px;
        border: 2px solid #1994f0;
        background: #3b3e4e;
        /* dark/Border/border-regular */
        border: 1px solid #545766;
        border-radius: 4px;
      }

      .checkbox-wrapper input:checked + label:before {
        background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKqADAAQAAAABAAAAKgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAKgAqAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBQQEBAQEBQYFBQUFBQUGBgYGBgYGBgcHBwcHBwgICAgICQkJCQkJCQkJCf/bAEMBAQEBAgICBAICBAkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/dAAQAA//aAAwDAQACEQMRAD8A/v4ooooAKKK8S+Lv7R/wO+A11pVj8XfElroc2ty+TZxzb2aQ5ALERqxSMEgNI+1Fzywruy7LMTjKyw+EpynN7Rim27auyV3otThzLNMNg6LxGMqRhBbyk1FK+iu3ZavQ9tooorhO4//Q/v4r83fi5/wUj8A/Av8Aatj/AGcvifodzpelSQ27/wDCRSygQB7lAyt5OzJt1J8t5hJ8rqwKYUmv0ir5A/bI/Y6+H37X/wAOW8NeIQtjrlirvpOqquZLaUjlW6F4XIAkTPPDDDAGvvfDetkMcyVPiSnKVCaceaLadNu1qiS+Ll/ld1Z3s7JP4HxJoZ/LLHV4aqRjiINS5ZJNVEr3ptv4ebpJWaatdJtqp+2D+2l8NP2S/hqvivVZY9U1nVIz/Y+mxSDddNjiQsM7YFyC8mPZcsQK/KT9jz9kH4m/tsfEz/hsv9sV5LjSbiRZtM06UFFvFQ5iAjP+rsY/4E6zck5Ukve/ZL/4JP8AxLvfiRH4v/bMdbvSfDQS10zTPtYvEvEgJ8rcwZvLs06rCdrMThkVch/6EoIILWBLW1RY4o1CoigBVUDAAA4AA6Cv2bPuKcn4KwVTJ+E66r4qqrVMStowe1Olq7Nq3NJPfre3J+LZBwrnHG+Np5xxbQdDC0nelhnvKa3qVdFdJ35YtbdLN88tFFFfy4f1Of/R/v4ooooAKKKKACiiigD/2Q==");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

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

  .MuiList-root {
    background-color: red !important;
  }

  .MuiPaper-elevation8 {
    box-shadow: none;
  }
  /* .MuiPaper-root {
    background-color: none;
  } */

  .actions {
    display: flex;
    justify-content: space-evenly;
    gap: 14px;

    img {
      cursor: pointer;
    }

    .more {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: flex-start;
      padding: 24px 16px;
      gap: 16px;

      .moreContent {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #e0e0e0;
        display: flex;
        gap: 11.44px;
        width: 100%;
        border-bottom: 1px solid #3b3e4e;
        padding-bottom: 5px;
        background: #2c2b41;
        align-items: center;
      }
    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 24px 24px 18px;
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
  @media (max-width: 900px) {
    .mainDiv {
      padding: 28px 19px 45px 19px !important;
    }
  }
`;
