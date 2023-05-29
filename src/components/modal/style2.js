import { styled } from "styled-components";

export const BotModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  width: 420px;
  left: calc(50% - 420px / 2);
  bottom: calc(10% - 480px / 2);
  background: #212036;
  border-radius: 8px;
  list-style: decimal !important;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    position: absolute;
    width: 100%;
    min-height: 346px;
    max-width: 448px;
    height: fit-content;
    background: #2c2b41;
    border-radius: 10px;
    padding: 0px 0px 24px;

    .topPart {
      width: 100%;
      background: #212036;
      padding: 10px 15px 32px 26px;
      display: flex;
      justify-content: space-between;

      .user {
        display: flex;
        gap: 16px;
        .userNameDiv {
          padding-top: 39px;
          .userName {
            width: 45px;
            height: 45px;
            padding: 12px;
            background: #32cdc6;
            border-radius: 50%;
            color: #212036;
          }
        }

        .userIconDiv {
          padding-top: 39px;

          .userIcon {
            width: 45px;
            height: 45px;
            padding: 12px;
            background: #2c2b41;
            border-radius: 11.25px;
          }
        }

        .details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 34px;
          .first {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: #f4f6f8;
          }
          .second {
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;
            color: #99a2ac;
          }
        }
      }
      .crossIconDiv {
        width: 24px;
        height: 24px;
        padding: 8px;
        background: #2c2b41;
        border-radius: 50%;
        cursor: pointer;
        .crossIcon {
          width: 8px;
          height: 8px;
          display: flex;
          align-items: center;
        }
      }
    }

    .form_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 400px;
      gap: 44px;
      padding: 24px 16px;
      background: #212036;
      border-radius: 5px;

      .field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        padding: 0;

        .fieldLabels {
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          color: #f4f6f8;
        }

        .text-field {
          background: #2c2b41;
          border-radius: 4px;
          border: 1px solid #2c2b41;
          width: 100%;
          max-width: 450px;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
          height: 40px;
          outline: none !important;
          background-image: none;
        }

        .downArrowDiv {
          position: absolute;
          right: 27px;
          top: 12.9rem;
          display: flex;
          align-items: center;
          padding: 10px;
          background: #086a8f;
          border-radius: 5px;
          height: 40px;
          width: 40px;
          .downArrowIcon {
            height: 20px;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .bottom {
      display: flex;
      gap: 24px;
      justify-content: space-evenly;

      .submit-btn {
        align-items: center;
        display: flex;
        background: #086a8f;
        border: 1px solid #338bc2;
        box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
        border-radius: 50px;
        padding: 12px 34.5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        height: 32px;
        width: fit-content;
      }

      .cencel-btn {
        align-items: center;
        display: flex;
        background: #212036;
        border: 1px solid #338bc2;
        box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
        border-radius: 50px;
        padding: 12px 34.5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        height: 32px;
        width: fit-content;
      }
    }

    ol li {
      display: inline-block;
      margin: 3px 12px 3px 12px;
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      list-style: decimal !important;
      list-style-type: decimal;
    }

    .div-wrapper {
      display: flex;
      flex-direction: column;
      // align-items: center;
      width: 100%;
      max-width: 400px;
      gap: 8px;
      padding: 24px 16px;
      background: #212036;
      border-radius: 5px;

      .list-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        gap: 9px;
        padding: 9px 16px;
        background: #2c2b41;
        border-radius: 5px;

        span {
          display: flex;
          gap: 8px;
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;
          color: #99a2ac;
        }
      }
    }
  }
`;
