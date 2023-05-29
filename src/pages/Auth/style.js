import { styled } from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55rem;
  // background-image: url("/assets/images/auth/background.jpg");
  // background-repeat: no-repeat;
  // background-size: auto;
  background:red;
height: "100vh";

  .firstEllipseDiv {
    position: relative;
    .firstEllipse {
      position: absolute;
      left: 17rem;
      top: -7rem;
    }
  }

  .secondEllipseDiv {
    position: relative;
    .secondEllipse {
      position: absolute;
      right: -4rem;
      top: -54.5rem;
    }
  }

  .thirdEllipseDiv {
    position: relative;
    .thirdEllipse {
      position: absolute;
      right: -5rem;
      top: -110rem;
      // border: 1px solid red;
    }
  }

  .registration {
    display: flex;
    flex-direction: column;
    gap: 55rem;
  }

  .authForm {
    display: flex;
    flex-direction: column;
    padding: 24px 24px 45px 24px;
    gap: 40px;
    position: absolute;
    width: 420px;
    left: calc(50% - 420px / 2);
    top: calc(50% - 480px / 2);
    background: #212036;
    border-radius: 8px;

    .brand {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .brand .logoImg {
      width: 32px;
      height: 29px;
    }

    .brand .companyName {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.06em;
      color: #f9fafb;
    }

    .welcomHeadings {
      display: flex;
      flex-direction: column;
      align-items: center;

      .first {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        color: #ffffff;
      }

      .second {
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        text-align: center;
        color: #e0e0e0;
      }
    }

    .loginHeadings {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .firstHeading {
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        color: #f4f6f8;
      }

      .secondHeading {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #99a2ac;
      }
    }
    .formFeilds {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .feilds {
        display: flex;
        flex-direction: column;
        gap: 5px;

        feildLabel {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;

          color: #f9fafb;
        }
      }

      .password {
        position: relative;
        .eyeImg {
          position: absolute;
          right: 0;
          top: 15px;
          left: 21.5rem;
        }
      }

      .bottomArea {
        display: flex;
        flex-direction: column;
        gap: 12px;
        .submit-btn {
          background: #086a8f;
          border: 1px solid #338bc2;
          box-shadow: 0px 0px 10px rgba(75, 255, 247, 0.5);
          border-radius: 50px;
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
          height: 42px;
        }
        .forgetPassword {
          float: right;
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          text-align: center;
          color: #086a8f;
        }
      }
    }
  }
`;
