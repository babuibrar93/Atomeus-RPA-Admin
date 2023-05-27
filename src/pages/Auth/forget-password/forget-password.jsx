import React from "react";
import { Link } from "react-router-dom";
import InputFeilds from "../../../components/input-feilds/input-feilds";
import { AuthWrapper } from "../style";

const ForgetPassword = () => {
  return (
    <AuthWrapper>
      {/* <div className="firstEllipseDiv">
        <img src="/assets/images/auth/ellipse.svg" className="firstEllipse" />
      </div> */}
      {/* <div className="secondEllipseDiv">
        <img src="/assets/images/auth/ellipse_two.svg" className="secondEllipse" />
      </div> */}
      <div className="authForm">
        <div className="brand">
          <img src="/assets/images/auth/logo.svg" className="logoImg" />
          <span className="companyName">ATOMEUS</span>
        </div>

        <div className="loginHeadings">
          <span className="firstHeading">Forget Password?</span>
          <span className="secondHeading">
            Please enter your email address to reset your password.
          </span>
        </div>

        <div className="formFeilds">
          <div className="feilds">
            <label className="feildLabel">Email Address</label>
            <InputFeilds type="email" name="email" placeholder="abc@example.com" />
          </div>

          <div className="bottomArea">
            <button type="submit" className="submit-btn">
              Send Invite
            </button>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default ForgetPassword;
