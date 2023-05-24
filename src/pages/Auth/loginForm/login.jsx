import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputFeilds from "../../../components/inputFeilds/inputFeilds";
import { LoginWrapper } from "../style";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (state) => {
    setShowPassword(!state);
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
          <span className="firstHeading">Login</span>
          <span className="secondHeading">
            Welcome back. Enter your credentials to access your account
          </span>
        </div>

        <div className="formFeilds">
          <div className="feilds">
            <label className="feildLabel">Email Address</label>
            <InputFeilds
              type="email"
              name="email"
              placeholder="abc@example.com"
            />
          </div>

          <div className="feilds">
            <label className="feildLabel">Password</label>
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

          <div className="bottomArea">
            <button type="submit" className="submit-btn">
              Login
            </button>
            <div>
              <Link to="/forget-password" className="forgetPassword">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
