import React, { useState } from "react";
import InputFeilds from "../../../components/input-feilds/input-feilds";
import { AuthWrapper } from "../style";

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
    <AuthWrapper>
      <div className="registration">

      <div className="authForm">
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
      </div>
    </AuthWrapper>
  );
};

export default ResetPassword;
