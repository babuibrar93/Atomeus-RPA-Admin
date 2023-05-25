import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputFeilds from "../../../components/inputFeilds/inputFeilds";
import { AuthWrapper } from "../style";
import Footer from "../../../common/landingpage/components/footer";

const Register = () => {
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
      {/* <div className="firstEllipseDiv">
          <img src="/assets/images/auth/ellipse.svg" className="firstEllipse" />
        </div> */}
      <div className="secondEllipseDiv">
          <img src="/assets/images/auth/ellipse_two.svg" className="secondEllipse" />
        </div>
<div className="registration">

      <div className="authForm">
        <div className="welcomHeadings">
          <span className="first">WELCOME TO AUTOMEOUS</span>
          <span className="second">Create your account</span>
        </div>

        <div className="formFeilds">
          <div className="feilds">
            <label className="feildLabel">First Name</label>
            <InputFeilds
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>

          <div className="feilds">
            <label className="feildLabel">Surname</label>
            <InputFeilds type="text" name="surname" placeholder="Surname" />
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
              Create Account
            </button>
          </div>
        </div>
      </div>
      <Footer />
</div>
    </AuthWrapper>
  );
};

export default Register;
