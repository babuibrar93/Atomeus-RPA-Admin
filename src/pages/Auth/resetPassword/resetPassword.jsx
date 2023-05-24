import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputFeilds from "../../../components/inputFeilds/inputFeilds";
import { LoginWrapper } from "../style";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = (state) => {
    setShowPassword(!state);
  };

  const handleShowConfirmPassword = (state) => {
    setShowConfirmPassword(!state);
  };

  return (
    <LoginWrapper>
      {/* <div className="firstEllipseDiv">
        <img src="/assets/images/auth/ellipse.svg" className="firstEllipse" />
      </div> */}
      {/* <div className="secondEllipseDiv">
        <img src="/assets/images/auth/ellipse_two.svg" className="secondEllipse" />
      </div> */}
      <div className="loginForm">
        <div className="brand">
          <img src="/assets/images/auth/logo.svg" className="logoImg" />
          <span className="companyName">ATOMEUS</span>
        </div>

        <div className="loginHeadings">
          <span className="firstHeading">Reset Password</span>
          <span className="secondHeading">
            Create a new password to regain access to your account.
          </span>
        </div>

        <div className="formFeilds">
          <div className="feilds">
            <label className="feildLabel">New Password</label>
            <div className="password">
              <InputFeilds
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
              />
              <img
                src="/assets/images/auth/eye.svg"
                className="eyeImg"
                width="14.41px"
                heigt="10.67px"
                onClick={() => handleShowPassword(showPassword)}
              />
            </div>
          </div>

          <div className="feilds">
            <label className="feildLabel">Confirm Password</label>
            <div className="password">
              <InputFeilds
                type={showConfirmPassword ? "text" : "password"}
                name="password"
                placeholder="Confirm Password"
              />
              <img
                src="/assets/images/auth/eye.svg"
                className="eyeImg"
                width="14.41px"
                heigt="10.67px"
                onClick={() => handleShowConfirmPassword(showConfirmPassword)}
              />
            </div>
          </div>

          <div className="bottomArea">
            <button type="submit" className="submit-btn">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default ResetPassword;
